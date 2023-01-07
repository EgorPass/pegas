import { memo, useEffect } from "react";


import { useFirebase } from "../../../hooks/componentsHooks/firebaseHooks/useFirebase"
import { useContactsActions } from "../../../hooks/reduxHooks/useBindActions";

import noFoto from "../../../images/no-foto.png"

import { ImageAddButton } from "../../contactsComponents/buttons/ImageAddButton";
import { ImageRemoveButton } from "../../contactsComponents/buttons/ImageRemoveButton";

export const ImageContact = memo(
													({		
														classNameForImage,
														classNameForContainer,
														uploadFile = null,
														urlPhoto = { noFoto },
														path = "",
														contactId = 0,
														fileId = "",
														name = "",
														addImage = false,
														clickAtAddImage = (e) => { },
														clickAtRemoveImage = (e) => { },
														children
	}) => {
		
		const { getImageUrl } = useFirebase();
		const { setContactPhotoUrl } = useContactsActions();

		useEffect(() => {
			
			let isCanceled = false
			
			if ( ( !uploadFile || !!path ) && addImage )
			getImageUrl(path )
			.then( url => {				
				if( !isCanceled )	setContactPhotoUrl( url )
			})
			.catch(err => {
				setContactPhotoUrl( noFoto )
			} )
					
			return () => {
				isCanceled = true
			}
		}, [ path, contactId ] )
				
		return (
			
			<div className = { classNameForContainer } style = {{ position: "relative"}} >
			
				{
					!uploadFile && addImage && !fileId &&
					<ImageAddButton 
						id = { contactId }
						className  = {`${classNameForImage}-add`}
						onchange = { clickAtAddImage }
					/>
				}
			
				{
					!uploadFile && addImage && !!fileId &&
					
					<ImageRemoveButton
						id = { contactId }
						fileId = { fileId }
						name = { name }
						onclick = { clickAtRemoveImage }
						className={`${classNameForImage}-remove`}
					/>
				}
						
				<img
					alt="contact"
					className = { classNameForImage }		
					src = { urlPhoto ? urlPhoto : noFoto }
			/>
			
			{ children }
				
		</div>
	)
})