import Resizer from "react-image-file-resizer"
import { useCallback } from "react";
import { useLoginContext } from "../../context/useContextData"

import { useFirebase } from "../firebaseHooks/useFirebase";

import { useGetStore } from "../../reduxHooks/useGetStore";
import { useContactsActions } from "../../reduxHooks/useBindActions";


export function useContactsItemField() {
	
	const { user } = useGetStore("auth")
	const {
		contactId, 	contactState,
		contactName, contactData,	contactPhoto, uploadFile
																															} = useGetStore("contacts")
	const {setFieldAtDatabase, uploadFileToStorage,	deleteFileFromStorage	} = useFirebase()
	
	const {
		setContactId, setOpenContact,

		setName, setSurName, setSecondName, resetNameData,
		
		setPhone, setTelegram, setEmail, setGitHub, setOther, resetContactData,

		resetContactPhoto, setContactPhotoStore, 

		setUploadFile, deleteUploadFile

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
			setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactName/secondName" , value )
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

	
	const clickAtCloseButton = useCallback(
		( id ) => {

			const { name, surName, secondName } = contactName;
			const { phone, telegram, email, gitHub, other } = contactData;

			if (
					!name && !surName &&
					!secondName && !phone &&
					!telegram && !email &&
					!gitHub && !other	) {

				if (contactPhoto.fileId) {
					if (contactPhoto.fileId in uploadFileRef) { 
						uploadFileRef[contactPhoto.fileId].cancel();
					}
					else {
						deleteFileFromStorage( `/contacts/${ user }/${ contactId }/contactPhoto/${ contactPhoto.fileId }/${ contactPhoto.name }`, contactPhoto.name );
					}
				}

				setFieldAtDatabase(`/contacts/${user}`, contactId, null)
			}
			else {
	
				setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactName" , contactName )
				setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactData" , contactData )
			}
				
				setOpenContact(false) 
				setContactId(0)
				resetNameData();
				resetContactData();
				resetContactPhoto();
		}
	, [ contactId, contactData, contactName, contactState, contactPhoto,  ] )
	

	const clickAtRemoveButton = useCallback(
		( id ) => {
			if ( !window.confirm( `Вы уверены, что хотите удалить контакт ${contactName.surName} ${contactName.name}?` )) return;

			if (contactPhoto.fileId) {
				if (contactPhoto.fileId in uploadFileRef) { 
					uploadFileRef[contactPhoto.fileId].cancel();
				}
				else {
					deleteFileFromStorage( `/contacts/${ user }/${ contactId }/contactPhoto/${ contactPhoto.fileId }/${ contactPhoto.name }`, contactPhoto.name );
				}
			}
		
			setOpenContact( false ) 
			setContactId(0)
			resetNameData();
			resetContactData();
			resetContactPhoto();

		setFieldAtDatabase( `/contacts/${ user }`, id, null )

	}
	, [ contactPhoto, ])
		
	const resizeFileAtNormal = ( file ) => new Promise( ( resolve ) => {
		Resizer.imageFileResizer( file, 180, 200, 'webp', 100, 0, (uri) => { resolve(uri)}, "blob")
	})

	const clickAtAddImage =	useCallback( async ( id, target  ) => {
		if (!target) return;

		const files = target.files
		if ( !files ) return 
					
		Array.from( files ).forEach( async ( file ) => {					
			const type = file.type	
		
				if(!/^(image)/gi.test(type)) return 
			
			const reader = new FileReader()							
			const normal = await resizeFileAtNormal( file )
			const name = file.name;
			const fileId = Date.now();
			
			setUploadFile(id, fileId, name)							

			reader.onload = (e) => {
				const result = reader.result
				const path = `/contacts/${ user }/${ id }/contactPhoto/${ fileId }/${ name }`
				
				setContactPhotoStore( { fileId, name, url: result, path: "" } )

				const uploadTask = uploadFileToStorage( path, normal);
			
				uploadFileRef[ fileId ] = uploadTask;
						
				uploadTask
					.on("state_changed",
						async (snapshot) => { 
							const progress = Math.round( ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100 );
							
							setUploadFile(id, fileId, name, progress)

						 },
						(err) => {
							console.log(`изображение ${name} не загрузилось `)
						},
						(data) => {
							console.log( "upload image ready...")
							
							setFieldAtDatabase(
								`/contacts/${ user }/${ id }`,
								`contactPhoto`,
								{ fileId,  name }
							)								
													
							delete uploadFileRef[fileId]
							deleteUploadFile( id, fileId )
						}
					)
			}
			reader.readAsDataURL(normal)
		})
	}
	, [  ])
	
	const clickAtRemoveImage = useCallback(
		async(id, fileId, name ) => {
			// console.log(" click at remove image button...")
			
			resetContactPhoto();
			
			await deleteFileFromStorage(`/contacts/${user}/${id}/contactPhoto/${ fileId }/${ name }`, name)	

			setFieldAtDatabase(
									`/contacts/${ user }/${ id }`,
									`contactPhoto`,
									{fileId: "", name: ""}
			)			
		}
	, [ uploadFile ] )



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