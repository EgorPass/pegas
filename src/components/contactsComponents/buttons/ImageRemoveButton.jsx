export const ImageRemoveButton = ({ id, fileId, name, className, onclick }) => {
	
	return ( 
		<div 
			className = { className }
			onClick = { (e) => onclick (id, fileId, name ) }
		>
			x
		</div>

	)
}