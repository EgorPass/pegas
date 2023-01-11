import { memo } from "react";
import { RemoveButton } from "../buttons/RemoveButton";
import { CloseButton } from "../buttons/CloseButton";

import "./button-container.scss"

export const FieldButtonContainer = memo(
	( { id, clickAtRemoveButton, clickAtCloseButton } ) => {

		// console.log( "button field render...", "  id: ", id)

		return (
			<div className = { `field-container__button-container button-container` }>
				<RemoveButton
					id = { id }
					clickAtRemoveButton = { clickAtRemoveButton }
				/>

				<CloseButton
					id = { id }
					clickAtCloseButton = { clickAtCloseButton }
				/>
			</div>
		)
	}	
)