import { useCallback } from "react";
import { useGetStore} from "../../reduxHooks/useGetStore.js"
import {	
	useFieldContentActions,
	useFieldStateActions,
	useTaskFileActions
} from "../../reduxHooks/useBindActions" 
import { useFirebase } from "./useFirebase";
import { useTaskItemField } from "./useTaskItemField.js";

/**
 * Хук для обработки кликов по списку задач.
 * 
 * @returns {object} методы для обработки кликов по списку задач: 		clickAtTitle,	clickAtCheckboxTitle,
 */
export function useTaskItemList() {

	const { newFieldContent, setFieldIsComplite } = useFieldContentActions()
	const {setOpenField} = useFieldStateActions()
	const { setFieldFiles } = useTaskFileActions();

	const { clickAtCloseButton } = useTaskItemField()
	const {  setFieldAtDatabase } = useFirebase()
	const { tasks,  uploadFile, fieldFiles,fieldState, fieldContent }= useGetStore("tasks")
	
	
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
										} )
			setFieldFiles( { ...task.files, ...files } )
			setFieldIsComplite( task.isComplite )
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
			setFieldAtDatabase(`/tasks/${task.id}`, "isComplite", !task.isComplite)
			
		}
	, [ tasks ] )


	return {				
		clickAtTitle,
		clickAtCheckboxTitle,
	}

}