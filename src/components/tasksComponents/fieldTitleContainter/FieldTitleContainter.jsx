import { memo } from "react"

import { EditableTextField } from "../editableTextField/EditableTextField";

import "./title-container.scss"


export const FieldTitleContainer = memo(({ className, content, onchange }) => {
		
	// console.log("FieldTitleContainer render...")
	
	return (
		<label
			className="task-field__title-container title-container"
		>
			<div className="task-field__text-height">
				{content}
				&nbsp;
			
				<EditableTextField
					onchange={onchange}
					content={content}
					className={className}
				/>
			</div>
		</label>
	)
}
)