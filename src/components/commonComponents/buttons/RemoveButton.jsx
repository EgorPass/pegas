import { memo } from "react";

export const RemoveButton = memo(
		( { id, clickAtRemoveButton } ) => {

		console.log( "/remove button render ....", id )

		return (
			<button
				onClick = { (e) => { clickAtRemoveButton( id ) } }
				className = "button-container__item-button"
			>
				Удалить
			</button>
	)
	} 
)