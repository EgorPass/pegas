import { createSlice } from "@reduxjs/toolkit";
import { loginAtFirebase, reginAtFirebase, logoutAtFirebase } from "./asynAuthActions";

export const { actions: authActions, reducer: authState } = createSlice( {
	name: "auth",
	initialState: {
		isAuth: false,
		status: "",
		error: "",
	},
	reducers: {
		setError: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, error: payload } )
		},
		setIsAuth: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, isAuth: payload } )
		}
	},
	extraReducers: ( builder ) => {
		builder
			.addCase( loginAtFirebase.pending, pending )
			.addCase( loginAtFirebase.rejected, rejected )
			.addCase( loginAtFirebase.fulfilled, fulfilled )

			.addCase( reginAtFirebase.pending, pending )
			.addCase( reginAtFirebase.rejected, rejected )
			.addCase( reginAtFirebase.fulfilled, fulfilled )
		
			.addCase( logoutAtFirebase.pending, pending )
			.addCase( logoutAtFirebase.rejected, rejected )
			.addCase( logoutAtFirebase.fulfilled, fulfilledOut )
	} 
})

function pending( state ) {
	return {
		error: "",
		isAuth: false,
		status: "pending",
	}
}

function rejected( state, { payload } ) {
	return {
		error: payload,
		isAuth: false,
		status: "rejected",
	}
}

function fulfilled( state ) {
	return {
		error: "",
		isAuth: true,
		status: "fulfilled",
	}
}

function fulfilledOut( state ) {
	return {
		error: "",
		isAuth: false,
		status: "fulfilled",

	}
}