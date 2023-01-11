import { memo } from "react";


export const FileAddButton = memo(({ id, clickAtAddFile }) => {
	
	console.log("FileAddButton render... ")
	
	return (
		<div className="file-container__file-add-position">
			<label>
				<input
					multiple
					onChange={(e) => clickAtAddFile(id, e.target)}
					name="files"
					type="file"
					className='file-container__file-add-input'
				/>
				<div
					className="file-container__file-add"
					data-task-tooltip="Прикрепить файл к задаче"
				>
					+
				</div>
			</label>
		</div>
	)
})