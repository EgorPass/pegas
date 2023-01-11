import { memo } from "react";

export const FileName = memo(
	({ id, fileId, name, clickAtFile, children }) => {
		
		// console.log( "FileName render...")
		
		return (
			<div
				className="file-container__file-name"
			>
				<span
					onClick={(e) => clickAtFile(id, fileId, name)}
				>
					{name}
				</span>
				{children}
			</div>
		)
	}
)