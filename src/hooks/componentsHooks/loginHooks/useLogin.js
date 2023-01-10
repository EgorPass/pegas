import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useGetStore } from "../../reduxHooks/useGetStore";
import {
	useLoginActions, useAuthActions,
	useTasksActions, useContactsActions,
} from "../../reduxHooks/useBindActions";
import { useFirebase } from "../firebaseHooks/useFirebase";

export function useLogin(
	uploadFileRef
) {

	const { error, user } = useGetStore("auth")
	
	const { tasks, fieldState, fieldContent, uploadFile } = useGetStore("tasks");
	
	const { contacts, contactState, contactName, contactData, contactId } = useGetStore("contacts");
	const { login, password, confirmPassword } = useGetStore("login")

	const { getTasks, setOpenField, resetFieldContent, deleteUploadFile, resetFieldFiles } = useTasksActions();

	const {
		getContacts, resetNameData, resetContactPhoto, setContactId,
		resetContactData, setOpenContact
	} = useContactsActions();

	const { setLogin, setPassword, setConfirmPassword } = useLoginActions();
	const { setError, loginAtFirebase, reginAtFirebase, logoutAtFirebase } = useAuthActions();

	const { setFieldAtDatabase } = useFirebase()

	const location = useLocation()
	const navigate = useNavigate();
	
	
	const changeLogin = useCallback(
		({ target: { value } }) => {
			if (error) setError("")
			setLogin(value)
		}
		, [login, error])


	const changePassword = useCallback(
		({ target: { value } }) => {
			setPassword(value)
			if (error) setError("");
		}
		, [password, error])
	

	const changeConfirmPassword = useCallback(
		({ target: { value } }) => {
			setConfirmPassword(value)
			if (error) setError("");
		}
		, [confirmPassword, error]);

	
	const navigateAfterAuth = (resultAuth, login) => {
		if (resultAuth.payload === login.replace(/\./gi, "_") ) {
			const pathname = location?.state?.from || "/"
			navigate(pathname, { replace: true })
		}
	}

	const loginButton = async (e) => {
		e.preventDefault();
		
		const res = await loginAtFirebase({ login, password })
		setPassword("")
		navigateAfterAuth(res, login)
	}

	const reginButton = async (e) => {		
		e.preventDefault();

		if ( password !== confirmPassword ) {
			setError( "wrong-confirm-password" )
			return;
		}

		const res = await reginAtFirebase({ login, password })
		setPassword("")
		setConfirmPassword("")

		navigateAfterAuth(res, login)
	}

	const logoutButton = async (e) => {
		e.preventDefault();
			
		for (let id in uploadFile) {

			Object.keys(uploadFile[id]).forEach(it => {
				uploadFileRef[it].cancel();
				delete uploadFileRef[it]	
				deleteUploadFile(id, it)
			})
		}
				
		for (let prop in uploadFileRef) {
			
			uploadFileRef[prop].cancel();
			delete uploadFileRef[prop]
		}

		navigate("/", { replace: true })
		logoutAtFirebase()

		if( tasks.length > 0 ) getTasks([]);
		if ( fieldState.openField ) {
			
			console.log(" reset tasks fields")
			
			if ( fieldContent.title.length < 5 ) return;

			for ( let prop in fieldContent ) {
				setFieldAtDatabase( `/tasks/${ user }/${ fieldContent.id }`,  prop , fieldContent[ prop ] )
			}

			setOpenField(false)
			resetFieldContent();
			resetFieldFiles();
		}
		
		if( contacts.length > 0 ) getContacts([])
		if (contactState.openContact) {

			setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactName" , contactName )
			setFieldAtDatabase( `/contacts/${ user }/${ contactId }`,  "contactData" , contactData )

			setOpenContact(false)
			resetContactPhoto();
			setContactId(0);
			resetNameData();
			resetContactData();
		}
	}

	const resetLoginFields = useCallback( () => {
		setPassword("")
		setError('')
	}
	, [ ] )

	const errorCatcher = ( prevLocationState, errorModAndTitle) => {
		
		prevLocationState = prevLocationState || {}
		
		if (/too-many-requests/gi.test(error)) {
			setError('')
			
			navigate(
				"/404",
				{
					state: {
						...prevLocationState,
						errorName: error,
						errorMessage: `Много частых попыток войти с неправильным паролем для логина ${ login }. \n Попробуйте вспомнить пароль для логина ${ login } и повторите попытку.`,
					}
				}
			)
			return;
		}		
	}

	const classModAndTitleDescription =useCallback(
			(error) => {
		
		let title = ""
		let titleClassMod = ""
		let loginClassMod = ""
		let passClassMod = ""
		let confClassMod = ""
		let mod = "_error"
		
		const errorString =
			error
				.match(/(user-not-found)|(invalid-email)|(wrong-password)|(weak-password)|(email-already-in-use)|(email-already-in-use)|(wrong-confirm-password)|(internal-error)/gi)
		
		if (errorString) {
			titleClassMod = mod;

			switch (errorString.toString().toLowerCase()) {
				
				case "internal-error":
					title = `Заполните пожалуйста корректно поля для регистрации`;
					loginClassMod = mod;
					passClassMod = mod;
					break;

				case "user-not-found":
					title = `Пользователь с логином ${login} не найден`;
					loginClassMod = mod;
					break;
								
				case "invalid-email":
					title = `Неверно введен адрес электронной почты ${login} !!!`
					loginClassMod = mod;
					break;
				
				case "email-already-in-use":
					title = `Пользователь с логином ${login} уже существует`
					loginClassMod = mod;
					break;
				
				case "wrong-password":
					title = `Неверно введн пароль для пользователя ${login}`
					passClassMod = mod;
					break;
				
				case "weak-password":
					title = "Пароль должен состоять минимум из 6 символов"
					passClassMod = mod;
					break;
				
				case "wrong-confirm-password":
					title = "Подтверждение пароля не совпадает с введеным паролем"
					confClassMod = mod
					break;

				default: title = ""; 
			}
		}
			
		return {
			title,
			loginClassMod,
			titleClassMod,
			passClassMod,
			confClassMod,
		}

	}
	, [] )

	return {

		changeLogin,
		changePassword,
		changeConfirmPassword,
		resetLoginFields,

		loginButton,
		reginButton,
		logoutButton, 

		errorCatcher,

		classModAndTitleDescription
	}

}