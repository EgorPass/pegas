

export const FileLoader =	({ progress, children }) => {

	// console.log("//file loader render ...")

	return (
			<div className = "pegas-body__file-loader file-loader">
				<div
					style = { { width: `${progress}%` } }
					className = "file-loader__progress"
				>
				</div>
					{ children }
			</div>
	)
}