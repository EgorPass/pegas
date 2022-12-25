import { memo } from "react"
import { SearchField } from "../../components/tasksComponents/searchField/SearchField";
import { CreateButton } from "../../components/tasksComponents/buttons/CreateButton";

import './task-header.scss';


/**
 * Мемоизированный компонент отрисовывает Header списка задач.
 * В компоненте содержиться поисковая строка и кнопка создания новой задачи.
 * 
 * Рисует компоненты SearchField и мемоизированный CreateButton.
 * 
 * @param {string} nextProp.search строка из состояния search для контролируемого компонента
 * и changeSearch обрабатывает запрос поисковой строки.
 * search состояние из redux
 * 
 * @returns 
 */
export const TaskHeader = memo(
	( {  search, changeSearch, createTask } ) => {

		// console.log( "taskHeader render.... ")
				
		return (
			<div className = "task-body__task-header task-header">

				{/* <SearchField
					// changeSearch = { changeSearch }
					// content = { search }
				/> */}

				<CreateButton
					createTask = { createTask }
				/>

			</div>
		)
	}
)