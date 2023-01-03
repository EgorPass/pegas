import { useGetStore } from "../../hooks/reduxHooks/useGetStore";
import { TaskItemField } from "../../components/tasksComponents/taskItemField/TaskItemField"
import { TaskListContainer } from "../../components/tasksComponents/taskListContainer/TaskListContainer";

import "./task-body.scss"

/**
 * Компонент отрисовывает блок контейнр для задачника, список задач и поле описания задач.
 *  А так же задает групировку для стилей.
 * 
 * TaskItemField отрисовывается только если заполнено состояние field.
 *  
 * TaskItemField & TaskListContainer содержат логику и используют состояния для построения полей
 * 
 * field принимает через пропсы, пропса не изменилась, берем из кэша
 *  
 * @returns 
 */
const Tasks = ( ) => {
					
	const {	fieldState } = useGetStore("tasks")
	
	return (
		<div className = "pegas-body__list-body list-body">

			<TaskListContainer />

			<div className="list-body__back-field"></div>
			
			{
				fieldState.openField && (

					<TaskItemField />
				)
			}

		</div>
	)
} 

export default Tasks