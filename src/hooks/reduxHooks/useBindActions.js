import { bindActionCreators } from "redux"

import { useDispatch } from "react-redux"

import { loginActions } from "../../redux/loginStore/loginStore"
import { authActions } from "../../redux/authStore/authStore"
import { loginAtFirebase, reginAtFirebase, logoutAtFirebase } from "../../redux/authStore/asynAuthActions"


export const useLoginActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators( loginActions, dispatch )
} 

export const useAuthActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators({ ...authActions, loginAtFirebase, reginAtFirebase, logoutAtFirebase }, dispatch )
}


