import { useCallback } from "react";
import { useLoginContext } from "../../context/useContextData"

import { useFirebase } from "../firebaseHooks/useFirebase";

import { useGetStore } from "../../reduxHooks/useGetStore";
import { useContactsActions } from "../../reduxHooks/useBindActions";


export function useContactsItemField() {
	
	const { user } = useGetStore("auth")
	const {
		contacts, 		contactId, 	contactState,
		contactName, contactData,	contactPhoto
																															} = useGetStore("contacts")
	const {setFieldAtDatabase, uploadFileToStorage,	deleteFileFromStorage, getImageUrl	} = useFirebase()
	
	const {
		setContactId, setOpenContact,

		setName, setSurName, setSecondName, resetNameData,
		
		setPhone, setTelegram, setEmail, setGitHub, setOther, resetContactData,

		setContactPhotoStatus, setContactPhotoUpload, setContactPhotoPath, resetContactPhoto, setContactPhoto, setContactPhotoUrl

	} = useContactsActions();


	const { uploadFileRef } = useLoginContext();
	

	const changeName = useCallback(({ target: { value } }) => {
		setName(value)
			setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactName/name" , value )

	}
		, [contactName.name])
	
	const changeSurName = useCallback(({ target: { value } }) => {
		setSurName(value)
			setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactName/surName" , value )

	}
		, [contactName.surName])

	const changeSecondName = useCallback(({ target: { value } }) => {
		setSecondName(value)

	}
		, [contactName.secondName])


	const changePhone = useCallback(({ target: { value } }) => {
		setPhone(value)
	}
		, [contactData.phone])

	const changeTelegram = useCallback(({ target: { value } }) => {
		setTelegram(value)
	}
		, [contactData.telegram])

	const changeEmail = useCallback(({ target: { value } }) => {
		setEmail(value)
	}
		, [contactData.email])
	
	const changeGitHub = useCallback(({ target: { value } }) => {
		setGitHub(value)
	}
		, [contactData.gitHub])

	const changeOther = useCallback(({ target: { value } }) => {
		setOther(value)
	}
		, [contactData.other])

	const checkName = () => {
		const { name, surName, secondName } = contactName

		if( name.length > 2|| surName.length > 2 || secondName.length > 2 ) return true
		
		return false
	}
	
	const clickAtCloseButton = useCallback(
		( id ) => {

			if( !checkName() ) return;
			
			setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactName" , contactName )
			setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactData" , contactData )
			
			setOpenContact(false) 
			setContactId(0)
			resetNameData();
			resetContactData();
			resetContactPhoto();
		}
	, [ contactData, contactName, contactState, contactPhoto,  ] )
	

	const clickAtRemoveButton = useCallback(
		( id ) => {
			if ( !window.confirm( `Вы уверены, что хотите удалить контакт ${contactName.surName} ${contactName.name}?` )) return;

			for ( let prop in uploadFileRef ) {
				console.log(prop)
				uploadFileRef[prop].cancel();

			}
			
			setOpenContact( false ) 
			setContactPhotoUpload( false );
			
			setContactId(0)
			resetNameData();
			resetContactData();
			resetContactPhoto();

		setFieldAtDatabase( `/contacts/${ user }`, contactId, null )

	}
	, [ ])
	

	const clickAtAddImage =	useCallback( ( { target } ) => {
		if (!target) return;

		const files = target.files
		if ( !files ) return 
					
			Array.from( files ).forEach( async ( file ) => {					
				const type = file.type	
				
					if(!/^(image)/gi.test(type)) return 

				const name = file.name;
				const fileId = Date.now();
			
				setContactPhotoStatus("pending")
				setContactPhotoUpload(true)
				
				const uploadTask = uploadFileToStorage(`/contacts/${ user }/${ contactId }/contactPhoto/${ fileId }/${ name }`, file);
				
				uploadFileRef[ fileId ] = uploadTask;
						
				uploadTask
					.on("state_changed",
						async (snapshot) => {  },
						(err) => {
							console.log(`изображение ${name} не загрузилось `)
						},
						(data) => {
							console.log( "upload image ready...")
							
							delete uploadFileRef[fileId]							
							
							setFieldAtDatabase(
								`/contacts/${ user }/${ contactId }`,
								`contactPhoto`,
								{ fileId, name }
							)
							setContactPhotoUpload(false);

								getImageUrl(`/contacts/${user}/${contactId}/contactPhoto/${fileId}/${name}`)
									.then(url => {				
										setContactPhotoUrl( { status: "fulfilled", url } )
									} )
									.catch( err => {
										setContactPhotoUrl( { status: "rejected", url: "" } )
									} )						
						}
					)
		})
	}
	, [  ])
	
	const clickAtRemoveImage = useCallback(
		async() => {
			console.log(" click at remove image button...")

			setContactPhotoStatus("pending")

			const contact = contacts.find(it => it.contactId === contactId)
			const photo = contact.contactPhoto

			await deleteFileFromStorage(`/contacts/${user}/${contactId}/contactPhoto/${photo.fileId}/${photo.name}`, photo.name)	
			setFieldAtDatabase(
									`/contacts/${ user }/${ contactId }`,
									`contactPhoto`,
									{fileId: "", name: ""}
			)
			setContactPhotoStatus("rejected")
			
		}
	, [ contactId,  ] )

	return {
		changeName,
		changeSurName,
		changeSecondName,

		changePhone,
		changeTelegram,
		changeEmail,
		changeGitHub,
		changeOther,

		clickAtCloseButton,
		clickAtRemoveButton,

		clickAtAddImage,
		clickAtRemoveImage,
	}
}