import { useCallback } from "react";
import { useGetStore} from "../../reduxHooks/useGetStore.js"
import {	
	useFieldContentActions,
	useFieldStateActions,
	useFieldFilesActions
} from "../../reduxHooks/useBindActions" 
import { useFirebase } from "../firebaseHooks/useFirebase";
import { useTaskItemField } from "./useTaskItemField.js";

/**
 * Хук для обработки кликов по списку задач.
 * 
 * @returns {object} методы для обработки кликов по списку задач: 		clickAtTitle,	clickAtCheckboxTitle,
 */
export function useTaskItemList() {

	const { newFieldContent, setFieldIsComplite } = useFieldContentActions()
	const {setOpenField} = useFieldStateActions()
	const { setFieldFiles } = useFieldFilesActions();

	const { clickAtCloseButton } = useTaskItemField()
	const {  setFieldAtDatabase, getFilesFromDatabase } = useFirebase()
	const { tasks,  uploadFile, fieldFiles,fieldState, fieldContent }= useGetStore("tasks")

	const { user } = useGetStore("auth")
	
	
	/**
	 * Отктрывае поле с описанием и вложениями из списка задач, по индификатору.
	 * 
	 * Ставит fieldState в true.
	 * 
	 * заполняет состояния textField и taskFile из состояни task
	 * 
	 * Функция используется на onClikc заголовка в списке задач, в компоненте Title.
	 * 
	 * @param {number} id инфификатор задачи (обекта из массива taskState), которая откроется при клики 
	 */
	const clickAtTitle = useCallback(
		( id ) => {
		 			
			if (fieldState.openField) {
				clickAtCloseButton(id)
			}

			getFilesFromDatabase(`/tasks/${ user }/${id}`)

			const task = tasks.find( it => it.id === id ) 
			if ( !task ) return;
			
			let files

				if ( uploadFile[ id ] ) {
					const oldFiles = task.files;
					const uploadingFiles = {}

						for ( let [ prop, val ] of Object.entries( uploadFile[ id ] ) ) {
							uploadingFiles[ prop ] = val.name
						}
						
					files = oldFiles ? ( { ...oldFiles, ...uploadingFiles } ) : ( { ...uploadingFiles } )
									
				}
				else {
					files  = task.files ?  ( { ...task.files } ) : {} 
				}

			
			newFieldContent( {
											id,
											title: task.title,
											description: task.description,
											deadline: task.deadline,
											isComplite: task.isComplite
										} )
			setFieldFiles( { ...task.files, ...files } )
			setOpenField( true )
		
		}
	, [ tasks, fieldFiles, fieldContent, fieldState ])

	/**
	 * Изменение компонента Chexkbox в списке задач.
	 * 
	 * @param {number} id инфификатор задачи (обекта из массива taskState), которая откроется при клики 
	 */
	const clickAtCheckboxTitle = useCallback(
		( id ) => {
			
			const task = tasks.find(it => it.id === id)
			
			if (fieldState.openField && (id === fieldContent.id)) {
				console.log("click at checkbox: taskId: ", id,)
				console.log( "click at checkbox: fieldContentId: ", fieldContent.id, )
				
				setFieldIsComplite( !task.isComplite )	
			}

			setFieldAtDatabase( `/tasks/${ user }/${ task.id }`, "isComplite", !task.isComplite )

		}
	, [ tasks, fieldState.openField, fieldContent.isComplite, fieldContent.id  ] )


	return {				
		clickAtTitle,
		clickAtCheckboxTitle,
	}

}