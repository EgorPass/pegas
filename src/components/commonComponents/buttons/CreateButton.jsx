import { memo } from "react"

export const CreateButton =
	memo(
		({ create }) => { 

	// console.log( "CreateButton render... ")

	return (
		<div className = "list-container__create-container">
			<div
				onClick = { create }
				className = "list-container__create-button"
				data-task-tooltip = "Создать"
				>
				+
			</div>
		</div>				
	)
		}
	)