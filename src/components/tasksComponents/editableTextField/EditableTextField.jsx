
export const EditableTextField = ({ className, content, onchange }) => {
	
	// console.log( "EditableTextField render...")

	return (
		<textarea
			value={content}
			className={className}
			onChange={onchange}
		></textarea>
	)
}