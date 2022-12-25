

export const CloseContactButton = ({ id, clickAtCloseButton }) => {

	return (
		<button
			className = "button-container__item-button"
			onclick = {( e ) => { clickAtCloseButton( id ) } }
		>
			Закрыть
		</button>
	
	)
}