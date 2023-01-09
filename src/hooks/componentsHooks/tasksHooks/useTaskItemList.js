import { useCallback } from "react";
import { useGetStore} from "../../reduxHooks/useGetStore.js"
import { useTasksActions } from "../../reduxHooks/useBindActions" 
import { useFirebase } from "../firebaseHooks/useFirebase";
import { useTaskItemField } from "./useTaskItemField.js";

/**
 * Хук для обработки кликов по списку задач.
 * 
 * @returns {object} методы для обработки кликов по списку задач: 		clickAtTitle,	clickAtCheckboxTitle,
 */
export function useTaskItemList( ) {
		// const list = target.closest(".contacts-container__contact-item")		
		// const title = list.querySelector(".contact-item__contact-name").innerHTML.length

		// if( !!title && target === list) return
		// console.log(title)

	const { user } = useGetStore("auth")
	const { tasks,  uploadFile, fieldFiles,fieldState, fieldContent }= useGetStore("tasks")
	
	const {
		setFieldFiles,		setOpenField,
		setNewFieldState, newFieldContent,	setFieldIsComplite
	} = useTasksActions();
	
	const {  setFieldAtDatabase } = useFirebase()
	
	const { clickAtCloseButton } = useTaskItemField()
	
	
	/**
	 * Вспомогательная функция, которая используется для создания объекта новой задачи, внутри функции createTask.
	 * 
	 * создает объект с индификатором, который генерирутся Date.now(),
	 * 
	 * @returns {object} возвращает объкет для создания новой задачи, типа taskState: { id: number, title: string, description: string, deadline: Date,	isComplite: boolean }
	 */
	const createNewTask = useCallback(
		( ) => {
			const id = Date.now();
			
			return {
				id,
				title: "Новая задача",
				description: "описание задачи",
				deadline: "2023-02-05",
				isComplite: false,
			}
		}
	, [])

	/**
	 * Создает и открывает новую задачу, 
	 * Загружает новую задачу на RealTimeDatabase.
	 * 
	 * состоянию field ставит вновь созданный объект, сразу открыватеся поле описаня задач, для её создания
	 * 
	 * состояние createState ставит в true
	 * 
	 * Используется на onClick кнопки создания задачи компоненты TaskHeader.
	 * @returns {void}
	 */
	const createTask = useCallback(
		async () => {		

			if (fieldState.openField) {
				clickAtCloseButton(fieldContent.id)
			}

			const newTask = createNewTask()
			setFieldAtDatabase( `/tasks/${ user }`, newTask.id, newTask )

			setNewFieldState()
			newFieldContent( newTask )
		}
	, [fieldContent, fieldState, tasks, user])

	
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

			const task = tasks.find( it => it.id === id ) 
			if ( !task ) return;
			
			if( fieldContent.id === task.id) return 

			if (fieldState.openField) {
				clickAtCloseButton(id)
			}


			
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
	, [ tasks, fieldFiles, fieldContent, fieldState,  ] )

	/**
	 * Изменение компонента Chexkbox в списке задач.
	 * 
	 * @param {number} id инфификатор задачи (обекта из массива taskState), которая откроется при клики 
	 */
	const clickAtCheckboxTitle =
		useCallback(
		( id ) => {
			
			console.log( tasks )
			const task = tasks.find(it => it.id === id)
			
			console.log(task.id)

			if( fieldState.openField && ( id === fieldContent.id ) ) {
				console.log( "click at checkbox: taskId: ", id, )
				console.log( "click at checkbox: fieldContentId: ", fieldContent.id, )
				
				setFieldIsComplite( !task.isComplite )	
			}

			setFieldAtDatabase( `/tasks/${ user }/${ task.id }`, "isComplite", !task.isComplite )

		}
	, [ tasks, fieldState.openField, fieldContent.isComplite, fieldContent.id  ] )
	// , [  fieldContent.isComplite, fieldContent.id  ] )


	return {		
		createTask,
		clickAtTitle,
		clickAtCheckboxTitle,
	}

}