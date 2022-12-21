import {  useLocation, Navigate } from "react-router-dom"

import { getAuth } from "firebase/auth"

import { useGetStore } from "../reduxHooks/useGetStore"

export const RequestAuth = ({ children }) => {
	// console.log( getAuth() );
	// console.log("RequestAuth render...")

	const { isAuth } = useGetStore("auth")
	const location = useLocation();

	if (!isAuth) {
		return <Navigate to="/login" replace state = { { from: location.pathname } } />
	}

	return children
}