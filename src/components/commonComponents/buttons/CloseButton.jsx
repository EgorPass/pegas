
export const CloseButton = ( { id, clickAtCloseButton } ) => {
	
	// console.log("/close button render ....", id)

	return (
		<button
			onClick = { (e) => { clickAtCloseButton( id ) } }
			className = "button-container__item-button"
		>
			Закрыть
		</button>
	)
}