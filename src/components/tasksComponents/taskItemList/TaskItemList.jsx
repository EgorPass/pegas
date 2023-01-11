import { memo } from "react"

import { TaskItemTitle } from "../taskItemTitle/TaskItemTitle";

import './task-container.scss';
import './task-item.scss'


export const TaskItemList =
	memo(
		({ tasks, setModeForTitle, clickAtTitle, clickAtCheckboxTitle }) => {
			
			// console.log("TaskItemList render...")

			return (
			
				<>
					{
						tasks.map(it => (
							<TaskItemTitle
								key={it.id}
								task={it}
								setModeForTitle={setModeForTitle}
								clickAtCheckboxTitle={clickAtCheckboxTitle}
								clickAtTitle={clickAtTitle}
							/>
						))
					}
				</>
			)
		}
)