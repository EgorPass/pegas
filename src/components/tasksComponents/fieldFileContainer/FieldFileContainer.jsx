import { memo } from "react"
import { FileConetnt } from "../fileContent/FileContent"
import { FileAddButton } from "../buttons/FileAddButton"

import "./file-container.scss"


export const FieldFileContainer =	memo(
	({ id, upload, clickAtAddFile, files, clickAtFile, clickAtCancelLoad, clickAtRemoveFile, }) => {
		
		// console.log( "FieldFileContainer render...")
		
		return (
		
			<div className="task-field__file-container file-container">
				<FileConetnt
					id={id}
					files={files}
					upload={upload}
					clickAtFile={clickAtFile}
					clickAtCancelLoad={clickAtCancelLoad}
					clickAtRemoveFile={clickAtRemoveFile}

				/>
				<FileAddButton
					id={id}
					clickAtAddFile={clickAtAddFile}
				/>
			</div>
		)
	}
)