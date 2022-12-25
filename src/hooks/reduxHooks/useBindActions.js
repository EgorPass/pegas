import { bindActionCreators } from "redux"

import { useDispatch } from "react-redux"

import { loginActions } from "../../redux/loginStore/loginStore"
import { authActions } from "../../redux/authStore/authStore"
import { loginAtFirebase, reginAtFirebase, logoutAtFirebase } from "../../redux/authStore/asynAuthActions"

import { LoaderActions } from "../../redux/loader/loaderSlice"

import { searchActions } from "../../redux/search/searchSlice"
import { tasksActions } from "../../redux/tasksStore/tasksSlice"

import { uploadFileActions } from "../../redux/tasksStore/fieldState/uploadFileSlice"
import { fieldContentActions } from "../../redux/tasksStore/fieldState/fieldContentSlice"
import { fieldStateActions } from "../../redux/tasksStore/fieldState/fieldStateSlice"
import { fieldFilesActions } from "../../redux/tasksStore/fieldState/taskFileSlice"

import { contactsActions } from "../../redux/contactsStore/contactsSlice"
import { contactNameActions } from "../../redux/contactsStore/contactNameSlice"
import { contactDataActions } from "../../redux/contactsStore/contactDataSlice"
import { contactStateActions } from "../../redux/contactsStore/contactStateSlice"


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


//////////////////////////////////////////////////
//////////////// лоадеры /////////////////////////


export const useLoaderActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(LoaderActions, dispatch)
}

//////////////////////////////////////////////////
////////// работа с задчником ////////////////////


export const useSearchActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(searchActions, dispatch)
}

export const useTasksActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(tasksActions, dispatch)
}

// работа с открытым полем ..

export const useFieldFilesActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(fieldFilesActions, dispatch)
}

export const useFieldStateActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(fieldStateActions, dispatch)
}

export const useFieldContentActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(fieldContentActions, dispatch)
}


export const useUploadFileActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(uploadFileActions, dispatch)
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////

//////////////////////////////////////////////////
////////// работа с контактами ////////////////////

export const useContactNameActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(contactNameActions, dispatch)
}

export const useContactDataActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(contactDataActions, dispatch)
}

export const useContactStateActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(contactStateActions, dispatch)
}

export const useContactsActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(contactsActions, dispatch)
}