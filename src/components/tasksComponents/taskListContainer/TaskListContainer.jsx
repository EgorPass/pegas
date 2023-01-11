import { useEffect } from "react"

import { useGetStore } from "../../../hooks/reduxHooks/useGetStore";
import { useTasksActions } from "../../../hooks/reduxHooks/useBindActions";

import { useFirebase } from "../../../hooks/componentsHooks/firebaseHooks/useFirebase";

import { useTaskItemList } from "../../../hooks/componentsHooks/tasksHooks/useTaskItemList";
import { useEdit  } from "../../../hooks/componentsHooks/tasksHooks/useEdit";

import { ItemList } from "../../commonComponents/itemList/ItemList";
import { TaskItemList } from "../taskItemList/TaskItemList"


export const TaskListContainer = () => {
	
	console.log(" TaskListCntainer render...")

	const { loaderItem } = useGetStore()
	const { user } = useGetStore( "auth" )
	const { tasks } = useGetStore( "tasks" )

	const { getTasks } = useTasksActions()

	const { monitor } = useFirebase()
	const { setModeForTitle } = useEdit();
	const {	createTask, clickAtTitle, clickAtCheckboxTitle } = useTaskItemList()

	useEffect( () => {
		
		monitor( `/tasks/${ user }`, getTasks )		
	
	}, [ ] )

	return (
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

	)
}