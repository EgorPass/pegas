

export const RemoveContactButton = ({ id, clickAtRemoveButton }) => {

	return (
		<button
			className = "button-container__item-button"
			onclick = {( e ) => { clickAtRemoveButton( id ) } }
		>
			Удалить
		</button>
	
	)
}