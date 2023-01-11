import { memo } from "react"


export const Checkbox = memo(
	({ id, isComplite, className, clickAtCheckbox }) => {
	
		console.log("Checkbox render... ")
		

		return (
			<label
				className={className}
			>
				<input
					type="checkbox"
					checked={isComplite}
					onChange={() => clickAtCheckbox(id)}
				/>
				<div
					className="task-item__checkmark"
				></div>
			</label>
		)
	})