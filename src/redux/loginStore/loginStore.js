import { createSlice } from "@reduxjs/toolkit";

const login = window.localStorage.getItem( "pegas-user-login" ) || ""

export const { actions: loginActions, reducer: loginState } = createSlice( {
	name: "login",
	initialState: {
		login,
		password: "",
		confirmPassword: "",
	},
	reducers: {
		setLogin: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, login: payload } )
		},
		setPassword: {
			prepare: ( val ) => ({ payload: val } ),
			reducer: ( state, { payload }) => ( { ...state, password: payload } )
		},
		setConfirmPassword: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, confirmPassword: payload } )
		},
	}
} )