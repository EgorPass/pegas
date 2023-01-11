import { memo } from "react"
import { DeadlineForTask } from "../deadlineForTask/DeadlineForTask";

import "./deadline-container.scss"


export const FieldDeadlineContainer = memo(
	( { content, onchange, isComplite } ) => { 
		
	console.log( "FieldDeadlineContainer render... ")


		const date = new Date( content )
		const today = Date.now()
		const diff = date - today;	
		const dayState = !isComplite ? diff > 0 ? true : false : true;
		
		let deadLineDescription =
			isComplite ? "" : dayState ? "Выполнить до: " : "истек срок: "

		return (
			<div className = "task-field__deadline-container deadline-container">
				
				<span className = "deadline-container__deadline-description">
					{ deadLineDescription }
				</span>
				{
					!isComplite && (
						< DeadlineForTask
							content={content}
							onchange={onchange}
						/>
					)
				}
			</div>
		)
	}
)