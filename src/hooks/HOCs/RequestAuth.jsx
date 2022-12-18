import {  useLocation, Navigate } from "react-router-dom"
import { useGetStore } from "../reduxHooks/useGetStore"

export const RequestAuth = ({ children }) => {
	
	// console.log("RequestAuth render...")

	const { isAuth } = useGetStore("auth")
	const location = useLocation();

	if (!isAuth) {
		return <Navigate to="/login" replace state = { { from: location.pathname } } />
	}

	return children
}