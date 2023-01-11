import { memo } from "react"

import { Checkbox } from "../checkbox/Checkbox";

import './checkbox-container.scss'

export const FieldCheckboxContainer =	memo(
	( { id, isComplite, clickAtCheckbox, newField } ) => {
	
		console.log("FieldCheckbox render")

		let checkDescription = isComplite ? "Выполненно!" : "В работе...";
	
		return (	
			<div className = "task-field__checkbox-container checkbox-container">
				{
					!newField &&
						<>
							<Checkbox
								id = { id }
								isComplite = { isComplite }
								className = "task-item__checkbox"
								clickAtCheckbox = { clickAtCheckbox }
							/>
							<span
								className = "checkbox-container__check-description"
							>
								{ checkDescription }
							</span>		
					</>
				}	
			</div>

		)
	}
)