import { memo } from "react"

/**
 * Мемоизированный компонент отрисовывает кнопку для создания задачи.
 * 
 * @param {function} nextProp.createTask - обрабтчик кнопки для создания новой задачи
 * 
 * @returns
 */
export const CreateButton = memo(	( { create } ) => (
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
)