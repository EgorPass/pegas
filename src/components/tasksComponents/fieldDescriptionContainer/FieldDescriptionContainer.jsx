import { memo } from "react"

import { EditableTextField } from "../editableTextField/EditableTextField";

import "./description-container.scss"


export const FieldDescriptionContainer = memo(({ content, onchange }) => {

	console.log( 'FieldDescriptionContainer render...')

	return (
		<label
			className="task-field__descriptio-container description-container"
		>
			<div className="task-field__text-height">
				{content}
				&nbsp;
				<EditableTextField
					onchange={onchange}
					content={content}
					className="description-container__description"
				/>
			</div>
		</label>
	)
}
)