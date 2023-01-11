import { memo } from "react"


export const FileAnchor =	memo( () => (
	<span
		data-task-tooltip = "Задача содержит прекрипленные файлы"
		className="task-item__file-anchor"
	>
		{/* &#128206; */}
	</span>
)
)