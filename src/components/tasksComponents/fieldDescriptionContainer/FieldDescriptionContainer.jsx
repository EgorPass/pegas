import { memo, useRef } from "react"

import { EditableTextField } from "../editableTextField/EditableTextField";

import "./description-container.scss"

/**
 * Мемоизированный компонент создает элемент описания задачи за счет компонента EditableTextField и его подложки.
 * 
 * @param {string} nextProp.content описание задачи из объекта массива taskState,
 * @param {object | null} nextProp.onchanger обработчик изменения строкового состояния changeDescription для передачи EditableTextField
 * @returns 
 */
export const FieldDescriptionContainer = memo(
	( { content, onchange } ) => {

			// console.log( "description field render..." )

			const nodeRef = useRef(null)
		
			return (
				<div
					className="field-container__descriptio-container description-container"
					onClick={(e) => {
						console.log( " click at title")
						console.log( nodeRef.current)
						if (nodeRef) nodeRef.current.focus();
					} }
				>
					<div className = "field-container__text-height">	
						{ content }
						&nbsp;
						<EditableTextField 
							nodeRef = { nodeRef }
							onchange = { onchange }
							content = { content }
							className = "description-container__description"
						/>
					</div>
				</div>
		) 
	}
)