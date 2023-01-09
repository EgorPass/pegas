import { memo } from "react"

import { TaskItemTitle } from "../taskItemTitle/TaskItemTitle";

import './task-container.scss';
import './task-item.scss'

/**
 * Мемоизированный компонент контейнер, создает блок с классом "task-body__content-container" для размещения списка задач.
 * Не отрисовывается при загрузке файлов к задаче.
 * 
 * Отрисовывает компоненты строки списка задачи: Checkbox, Title и FileAnchor.
 * 
 * А так же отрисовывает TaskContainerLoader для ожидания загрузки
 * 
 * Через состояние tasks принимает масив с объектом задач tasks, и из этого масива строятся элементы списка задач с классом "task-container__task-item task-item".
 * 
 * Через контекст useTaskItemListContext принимает clickAtTitle и clickAtCheckboxTitle, которые передает в дочерение компоненты
 * 
 * Родительский компонент TaskBody.
 * 
 * @returns 
 */
export const TaskItemList =
	memo(
	({ tasks, setModeForTitle, clickAtTitle, clickAtCheckboxTitle }) => (
			
			<>	
				{
					tasks.map(it => (
						<TaskItemTitle
							key = { it.id }
							task = { it }
							setModeForTitle = { setModeForTitle }
							clickAtCheckboxTitle = { clickAtCheckboxTitle }
							clickAtTitle = { clickAtTitle }
						/>
					))
				}
		</>
	)
)