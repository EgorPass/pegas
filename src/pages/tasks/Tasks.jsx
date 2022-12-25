import { memo, useEffect } from "react";

import { getAuth } from "firebase/auth";

import { useGetStore } from "../../hooks/reduxHooks/useGetStore";
import { useTasksActions } from "../../hooks/reduxHooks/useBindActions";

import { useFirebase } from "../../hooks/componentsHooks/firebaseHooks/useFirebase";

// import { useTaskHeaderContext, useEditContext, useTaskItemListContext, useTaskItemFieldContext,   } from "../../ComponentsHooks/useContextData";


import { ItemList } from "../../components/commonComponents/itemList/ItemList";

import { TaskItemList } from "../../components/tasksComponents/taskItemList/TaskItemList";
import { TaskItemField } from "../../components/tasksComponents/taskItemField/TaskItemField"


import { useEdit } from "../../hooks/componentsHooks/tasksHooks/useEdit";
import { useTaskHeader } from "../../hooks/componentsHooks/tasksHooks/useTaskHeader";
import { useTaskItemList } from "../../hooks/componentsHooks/tasksHooks/useTaskItemList";
import { useTaskItemField } from "../../hooks/componentsHooks/tasksHooks/useTaskItemField";

import "./task-body.scss"

/**
 * Мемоизированный компонент отрисовывает блок контейнр в котором отрисовывается три основные блока из которых состоит список задач: TaskHeader, TaskContainer и TaskItemField.
 * 
 * TaskItemField отрисовывается только если заполнено состояние field.
 *  
 * field принимает через пропсы, пропса не изменилась, берем из кэша
 *  
 * @returns 
 */
export const Tasks =
	// memo(
	() => {
		
	// console.log("task body render ...")
		// const userUID = window.localStorage.getItem("pegas-user-uid")
		
		// console.log(userUID)
	
		const { loaderItem } = useGetStore()
		console.log( loaderItem)

	const { user } = useGetStore( "auth" )
	const { search, tasks, fieldState, fieldContent, fieldFiles, uploadFile } = useGetStore("tasks")
	
	const { getTasks } = useTasksActions()
	const { setModeForTitle } = useEdit();
	const { changeSearch, createTask } = useTaskHeader()
	const { clickAtTitle, clickAtCheckboxTitle } = useTaskItemList()
	const {
					clickAtCheckboxField,			clickAtCloseButton,
					clickAtRemoveButton,			changeTitle,
					changeDescription,				changeDate,
								
					clickAtFile,							clickAtAddFile,
					clickAtRemoveFile,				clickAtCancelLoad,

					uploadTaskRef
					} = useTaskItemField()

	const { monitor } = useFirebase()
	
	useEffect( () => {
		
		monitor( `/tasks/${ user }`, getTasks )		
	
	}, [ ] )

	return (
		<div className = "pegas-body__list-body list-body">

			<ItemList
				classBlockName = "task"
				loader = { loaderItem }
				loaderContent = "Давайте создадим задачу!"
				create = {  createTask }
			>
					<TaskItemList
						tasks = { tasks }
						setModeForTitle = { setModeForTitle }
						clickAtTitle = { clickAtTitle }
						clickAtCheckboxTitle = { clickAtCheckboxTitle }	
					/>
			</ItemList>
			

			<div className="list-body__back-field"></div>
				{
					fieldState.openField && (

						<TaskItemField
							fieldContent = { fieldContent }
							fieldState = { fieldState }
							fieldFiles = { fieldFiles }
							uploadFile = { uploadFile }
							uploadTaskRef = { uploadTaskRef }
							
							clickAtCheckboxField = { clickAtCheckboxField }
							clickAtCloseButton = { clickAtCloseButton }
							clickAtRemoveButton = { clickAtRemoveButton }
							changeTitle = { changeTitle }
							changeDescription = { changeDescription }
							changeDate = { changeDate }
										
							clickAtFile = { clickAtFile }
							clickAtAddFile = { clickAtAddFile }
							clickAtRemoveFile = { clickAtRemoveFile }
							clickAtCancelLoad = { clickAtCancelLoad }
							setModeForTitle = { setModeForTitle }
						/>
					)
				}

		</div>
	)
	} 
// )
