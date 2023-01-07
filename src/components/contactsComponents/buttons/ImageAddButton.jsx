export const ImageAddButton =	({ className, onchange, id }) => {
	
	return (
		<label>
			<div className={ className} >
				<span>
					+
				</span>
				<input
					name="files"
					type="file"
					onChange = { (e) =>  onchange( id, e.target) } />
			</div>
		</label>

	)
}