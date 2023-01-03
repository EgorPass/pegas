import { bindActionCreators } from "redux"

import { useDispatch } from "react-redux"

import { loginActions } from "../../redux/loginStore/loginStore"
import { authActions } from "../../redux/authStore/authStore"
import { loginAtFirebase, reginAtFirebase, logoutAtFirebase } from "../../redux/authStore/asynAuthActions"

import { LoaderActions } from "../../redux/loader/loaderSlice"

import { searchActions } from "../../redux/search/searchSlice"
import { tasksActions } from "../../redux/tasksStore/tasksSlice"

import { uploadTasksFileActions } from "../../redux/tasksStore/fieldState/uploadFileSlice"
import { uploadContactsFileActions } from "../../redux/contactsStore/uploadFileSlice"

import { fieldContentActions } from "../../redux/tasksStore/fieldState/fieldContentSlice"
import { fieldStateActions } from "../../redux/tasksStore/fieldState/fieldStateSlice"
import { fieldFilesActions } from "../../redux/tasksStore/fieldState/taskFileSlice"

import { contactStateActions } from "../../redux/contactsStore/contactStateSlice"
import { contactsActions } from "../../redux/contactsStore/contactsSlice"
import { contactIdActions } from "../../redux/contactsStore/contactsIdSlice"
import { contactNameActions } from "../../redux/contactsStore/contactNameSlice"
import { contactDataActions } from "../../redux/contactsStore/contactDataSlice"
import { contactPhotoActions } from "../../redux/contactsStore/contactsPhoto"


///////////////////////////////////////////////////
////////////////// header /////////////////////////

export const useSearchActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(searchActions, dispatch)
}


//////////////////////////////////////////////////
/////////// работа с авторизацией ////////////////

export const useLoginActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators( loginActions, dispatch )
} 

export const useAuthActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators({ ...authActions, loginAtFirebase, reginAtFirebase, logoutAtFirebase }, dispatch )
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////


////////////////////////////////////////////////////
///////////////////////////////////////////////////


///////////////////////////////////////////////////
//////////////////////////////////////////////////




//////////////////////////////////////////////////
////////// работа с задчником ////////////////////

export const useTasksActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators({
															...tasksActions,
															...fieldFilesActions,
															...fieldStateActions,
															...fieldContentActions,
															...uploadTasksFileActions
														}, dispatch)
}


//////////////////////////////////////////////////
////////// работа с контактами ////////////////////

// export const useContactsUploadFileActions = (field) => {
// 	const dispatch = useDispatch();
// 	return bindActionCreators(uploadContactsFileActions, dispatch)
// }

export const useContactsActions = ( ) => {
	const dispatch = useDispatch();
	return bindActionCreators({
															...contactNameActions,
															...contactDataActions,
															...contactPhotoActions,
															...contactIdActions,
															...contactStateActions,
															...contactsActions,
															...uploadContactsFileActions,
														}, dispatch)
}

// export const useContactNameActions = () => {
// 	const dispatch = useDispatch();
// 	return bindActionCreators(contactNameActions, dispatch)
// }

// export const useContactDataActions = () => {
// 	const dispatch = useDispatch();
// 	return bindActionCreators(contactDataActions, dispatch)
// }

// export const useContactIdActions = () => {
// 	const dispatch = useDispatch();
// 	return bindActionCreators(contactIdActions, dispatch)
// }

// export const useContactPhotoActions = () => {
// 	const dispatch = useDispatch();
// 	return bindActionCreators(contactPhotoActions, dispatch)
// }

// export const useContactStateActions = () => {
// 	const dispatch = useDispatch();
// 	return bindActionCreators(contactStateActions, dispatch)
// }

// export const useContactsActions = () => {
// 	const dispatch = useDispatch();
// 	return bindActionCreators(contactsActions, dispatch)
// }



//////////////////////////////////////////////////
//////////////// лоадеры /////////////////////////


export const useLoaderActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(LoaderActions, dispatch)
}