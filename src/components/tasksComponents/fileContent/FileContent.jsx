import { RemoveFile } from "../../commonComponents/buttons/RemoveFile";

import { FileLoader } from "../../commonComponents/fileLoader/FileLoader";
import { FileName } from "../fileName/FileName";


export const FileConetnt =( {
			id,
			files,
			upload,
			clickAtFile,
			clickAtCancelLoad,
			clickAtRemoveFile,
	} ) => {
	
		const entries = (files && Object.entries(files)) || []	
						
		console.log("FileContent render...")
	
		return (
			<ul className="file-container__file-list" >
				{
					entries && entries.map( ([fileId, name]) => ( 

						<li
							key={`li$	${fileId}`}
							data-item = {fileId}
							className="file-container__file-item"
						>
							{
		
									<>
										<FileName
											id = { id }
											fileId = { fileId }
											name = { name }
											clickAtFile = { clickAtFile }
										>

											{ ( upload && upload[ fileId ] ) &&
											<FileLoader
												id = { id }
												fileId = { fileId }
												progress = { upload[fileId].progress }
											/>	}

										</FileName>

									{(upload && upload[fileId]) ?
										<RemoveFile 
											id = { id }
											fileId = { fileId }	
											onclick = { clickAtCancelLoad }
											className = "file-container__file-loader-cancel"
										/>
										:
										<RemoveFile 
											id = { id }
											fileId = { fileId }
											name = { name }
											onclick = { clickAtRemoveFile }
											className = "file-container__file-remove"
										/>
									}
									</>
							}
						
						</li>
						) 
					)
				}
			</ul>
		)
	} 