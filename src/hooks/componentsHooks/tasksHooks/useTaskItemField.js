import {  useCallback } from "react";

import { useLoginContext } from "../../context/useContextData";

import { useGetStore } from "../../reduxHooks/useGetStore"
import { useTasksActions } from "../../reduxHooks/useBindActions" 

import { useFirebase } from "../firebaseHooks/useFirebase"


/**
 * Хук для обработки изменений описания поля задачи (кнопики закрыть или удалить, чекбокс, изменение текстовых полей)
 * 
 * @returns {object} Возвращает объект методов для функциональности описания поля задачи: 		clickAtCheckboxField, clickAtRemoveButton, clickAtCloseButton, changeTitle, changeDescription, changeDate,
 */
// export function useTaskItemField( uploadFileRef ) {
export function useTaskItemField(   ) {
	
	const { user } = useGetStore( "auth" )
	const { contacts, fieldContent, fieldFiles, fieldState, uploadFile, } = useGetStore( "tasks" )

	const { uploadFileRef } = useLoginContext();

	const {
					setFieldAtDatabase,			uploadFileToStorage,
					deleteFileFromStorage,	downlaodFileFromStorage,
	} = useFirebase()

	const { 
					setOpenField, 			setNewField,
					
					setFieldTitle, 			setFieldDescription,
					setFieldIsComplite,	setFieldDeadline,
					resetFieldContent,

					setFieldFiles, 			removeFieldFiles, resetFieldFiles,
								
					setUploadFile, 			deleteUploadFile

	} = useTasksActions()


	/**
	 * Изменение состояния чекбокса о выполнения задачи в поле описания задачи.
	 * 
	 * обновляет fieldState 
	 * 
	 * @returns {void}
	 */
	const clickAtCheckboxField = useCallback(
		() => {
			setFieldIsComplite( !fieldContent.isComplite )
		}
	, [ fieldContent.isComplite, ]  )

	const closeTask = () => { 
		if ( fieldContent.title.length < 5 ) return;

			for ( let prop in fieldContent ) {
				
				setFieldAtDatabase( `/tasks/${ user }/${ fieldContent.id }`,  prop , fieldContent[ prop ] )
			}
			
				setOpenField( false )
				resetFieldContent()
				resetFieldFiles()

			if ( fieldState.newField ) {
				setNewField( false )
			}

	} 

	/**
	 * Закрывает поле с описанием задачи, которое на экране.
	 * 
	 * заносит изменения в realtimeDatabase по id беря текущие значения из состояний для работы с полем.
	 * 
	 * изменяет состояния fieldContent, fieldState и taskFile.
	 * @param {number} id для индификации в методе setFieldAtDatabase
	 */
	const clickAtCloseButton = useCallback(
		( id ) => {

			// if ( fieldContent.title.length < 5 ) return;

			const { title, description } = fieldContent

			if ( !title && !description ) {
				const entries = Object.entries( fieldFiles ) || []
				for ( let [ name, value ] of entries ) {
			
					if ( ( name in uploadFileRef ) && ( uploadFileRef[ name ]._state === "running" ) ) {

					uploadFileRef[ name ].cancel();
					deleteUploadFile( id, name );
					delete uploadFileRef[ name ];
				
					}
					else {		
							deleteFileFromStorage( `/tasks/${ user }/${ id }/${ name }/${ value }`, value );
					}
				}
				
				setFieldAtDatabase(`/tasks/${user}`, id, null)

			}
			else
			for ( let prop in fieldContent ) {
				
				setFieldAtDatabase( `/tasks/${ user }/${ fieldContent.id }`,  prop , fieldContent[ prop ] )
			}
			
	
				if ( fieldState.newField ) {
					setNewField( false )
				}
				setOpenField( false )
				resetFieldContent()
				resetFieldFiles()
		}
	, [ fieldContent, fieldState ])

	/**
	 * Удаление задачи и закрытие поля описания задачи.
	 * 
	 * Функция удаляет задачу из tasks, а так же все зависимости связанные с ней,
	 * а имеено удаляются загруженные файлы в storageFirebase, файлы, которые загружаются в storageFirebad в момент нажатия кнопки "Удалить", и удаление описание задачи из RealTimeDatabase.
	 * 
	 * Обновляет realtimeDatabase, storageFirebase, fieldState, taskFile, uploadFile.
	 * 
	 * Для удаления из realtimeDatabase и storageFirebase состояние cancelState, которое передается верхнему хуку через аргумент.
	 * 
	 * Функция срабатывает на onClick, кнопки "Удалить", компоненты RemoveItemButton.
	 * 
	 * @param {number} id индификатор задачи (обекта из массива taskState), описание которой открыто на экране.
	 * @return {void}
	 */
	const clickAtRemoveButton = useCallback(
		async (id) => {
			if ( !window.confirm( `Вы уверены, что хотите удалить задачу: ${fieldContent.title}?` )) return;

			const entries = Object.entries( fieldFiles ) || []
			
				if ( fieldState.newField ) {
					setNewField( false )
				}				
				setOpenField( false )
				resetFieldContent()
				resetFieldFiles()
				
				setFieldAtDatabase( `/tasks/${ user }`, id, null )

				
			for ( let [ name, value ] of entries ) {
			
				if ( ( name in uploadFileRef ) && ( uploadFileRef[ name ]._state === "running" ) ) {

					uploadFileRef[ name ].cancel();
					deleteUploadFile( id, name );
					delete uploadFileRef[ name ];
				
				}
				else
					deleteFileFromStorage( `/tasks/${ user }/${ id }/${ name }/${ value }`, value );

			}
		}
	, [ fieldFiles ] )
	

	/**
	 * Изменение textarea поля EditableTextField в названии задачи. 
	 * 
	 * метод делает управляемым тестовое поле
	 * 
	 * @param {string} value значение из объекта события onChanhge у textarea 	 
	 */
	const changeTitle = useCallback ( 
		( { target: { value } } ) => {
			setFieldTitle( value )
			
			setFieldAtDatabase( `/tasks/${ user }/${ fieldContent.id }`,  "title" , value )
			
		}
	, [ fieldContent.title, contacts ] )
		
	/**
	 * Изменение textarea поля EditableTextField в описании задачи.
	 * 
	 * метод делает управляемым тестовое поле
	 * 
	 * @param {string} value значение из объекта события onChanhge у textarea 	 
	 */
	const changeDescription =	useCallback(
		( { target: { value } } ) => {
			setFieldDescription( value )
		}
	, [ fieldContent.description ])
	
	/**
	 * Изменентие даты.
	 * 
	 * Обновляет field.
	 * 
	 * Используется на onChange в input компоненты DeadlineForTask
	 * 
	 * @param {nuber} id индификатор интересующей задачи из taskState, для редактирования даты
	 * @param {string} str дата из поля input
	 * @returns {void}
	 */
	const changeDate = useCallback (
		( { target: { value } } ) => {		
			setFieldDeadline( value )
			setFieldAtDatabase( `/tasks/${ user }/${ fieldContent.id }`,  "deadline" , value )
			
		}
	, [ fieldContent.deadline ] )


	////////// Работа с отделом по загрузке файлов ////////////////


	/**
	 * метод удаляет файл у задаче в realtimeDatabase и состояния taskFile
	 * 
	 * зависти от taskFile
	 * 
	 * @param {number | string} id индификатор для определения задачи в realtimeDatabase
	 * @param {strgin} path полный путь до нужной задачи или свойства в задаче 
	 * @param {number | string} fileId название раздела задачи или индификатор файла
	 * @param {string | object | null} prop название для файла или содержимое свойства задачи
	 */
	const updateFieldAfterUpLoadOrCancel = useCallback(
		( path, fileId, prop ) => {
			setFieldAtDatabase( path, fileId, prop )	
			removeFieldFiles( fileId )		
		}
	, [ fieldFiles ])

	/**
	 * Добавление файла к задаче, в поле описания задачи.
	 * 
	 * Обновляет realtimeDatabase, storageFirebase, cancelState, loadingFiles .
	 * 
	 * Примис от uploadBytesResumable заноситься в cancelState для отмены загрузки,
	 * при удалении задачи, или возможности отменить загрузку.
	 * 
	 * В обрабтчике примиса от uploadBytesResumable для uploadFile ставиться прогресс загрузки для каждого загружаемого файла.
	 * 
	 * Используется на onClick эмитации кнопки (тэг input[type ='file']) компоненты FileAddButton.
	 * 
	 * В setFileAtStorage: 
	 * 
	 * параметр pathToStorage ставим полный путь включая имя файла (`/tasks/${ user }/${ id }/${ fileId }/${ name }`  || (`/contacts/${ user }/${ contactPhoto }/${ fileId }/${ name }`)) ;
	 * 
	 * параметр pathToDatabase ставим путь до папки с название где храняться файлы (`/tasks/${ user }/${ id }/files/` || `/contacts/${ user }/`);
	 *  
	 * для установки контактов в fileId передаем строку contactPhoto
	 * 
	 * 
	 * @param {number} id инфификаотр задачи (объекта массива taskState), к которой загружаем файл,
	 * @param {object} target объект события input[type='file'] для забора файла который выбрали,
	 * @returns {void} 
	 */
	const clickAtAddFile = useCallback(
		async ( id, target ) => {
			if ( !target ) return;

			const files = target.files
			if ( !files ) return 
			
				Array.from( files ).forEach( async ( file ) => {
					const name = file.name;
					const fileId = Date.now();

						setFieldFiles( { [ fileId ]: name } )

					const uploadTask = uploadFileToStorage(`/tasks/${ user }/${ id }/${ fileId }/${ name }`, file);
			
						setUploadFile( id, fileId, name )			
						uploadFileRef[ fileId ] = uploadTask;
					
						uploadTask
							.on("state_changed",
								async (snapshot) => {
									const progress = Math.round(
										(snapshot.bytesTransferred / snapshot.totalBytes) * 100
									);
									setUploadFile(id, fileId, name, progress)
								},
								(err) => {
									console.log(`Файл ${name} не загрузился `)
								},
								(data) => {
									setFieldAtDatabase(`/tasks/${ user }/${ id }/files/`, fileId, name)
									delete uploadFileRef[fileId]
									deleteUploadFile(id, fileId)
								}
							)
				})
		}
	, [  ])

	/**
	 * Отмена загузки файла к задаче (в описание задачи).
	 * 
	 * Для отмены использует примис от uploadBytesResumable (функция для загрузки на storageFirebase), который содержиться в состоянии cancelState.
	 * 
	 * Обновляет состояние field, realtimeDatabase.
	 * 
	 * Используется на onClick эмуляции кнопки (тэг span) компоненты FileLoader.
	 * 
	 * @param {number} id индификатор задачи в которой поставили загрузку файла,
	 * @param {string | number} fileId поле для хранения файла,
	 */
	const clickAtCancelLoad = useCallback(
		( id, fileId ) => {
			
			if ( ( id in uploadFile ) && ( fileId in uploadFile[ id ] ) ) {
		
					if (uploadFile[ id ][ fileId ].progress === 100) return;
				
				updateFieldAfterUpLoadOrCancel( `/tasks/${ user }/${ id }/files/`, fileId, null )

				uploadFileRef[ fileId ].cancel()			
				delete uploadFileRef[ fileId ]			
				deleteUploadFile( id, fileId )
			}
		}
	, [ uploadFile ])

	/**
	 * Удаление загруженного файла в поле описания задачи.
	 * 
	 * Обновляет taskFile, realtimeDataBase, storageFirebase
	 * удаляет из трех сущностей.
	 * 
	 * Используется на onClick эмитации кнопки (тэг span) в компоненте FileConetnt.
	 * 
	 * @param {number} id индификатор задачи (объекта массива taskState),
	 * @param {string} fileId индификатор поля файла для удаления,
	 * @param {string} name названия файла для удаления
	 * @returns {void}
	 */
	const clickAtRemoveFile = useCallback(
		async ( id, fileId, name ) => {
			updateFieldAfterUpLoadOrCancel( `/tasks/${ user }/${ id }/files/`, fileId, null )		
			deleteFileFromStorage( `/tasks/${ user }/${ id }/${ fileId }/${ name }`, name )				
		}
	, [  ])

	/**
	 * По клику на название в списке прикрепленных файлов, функция направит по ссылке,
	 * которую сформирует из пути до storageFirebase + "id/fileId/name".
	 * 
	 * Для загрузки откроется новое окно.
	 * 
	 * Используется на onClick эмуляции ссылки (строчный элемент) на компоненте FileConetnt.
	 * 
	 * @param {number} id индификатор задачи в которой находиться файл,
	 * @param {string | number} fileId поле (контейнер) для хранения файла,
	 * @param {string} name название файла
	 * @returns {void}
	 */
	const clickAtFile = useCallback(
		async ( id, fileId, name ) => {
			downlaodFileFromStorage(`/tasks/${ user }/${ id }/${ fileId }/${ name }`, name)
		}
	, [])


	////////////////////////////////////////////////////////////

	return {	
		clickAtCheckboxField,
		clickAtRemoveButton,
		clickAtCloseButton,

		changeTitle,
		changeDescription,
		changeDate,

		clickAtFile,
		clickAtAddFile,
		clickAtRemoveFile,
		clickAtCancelLoad,

		closeTask,
	}
}