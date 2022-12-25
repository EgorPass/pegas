import { createSlice } from "@reduxjs/toolkit";

export const { actions: contactDataActions, reducer: contactData } = createSlice({
	name: "contactData",
	initialState: {
		phone: "",
		telegram: "@",
		email: "",
		gitHub: "",
		other: "",
	},
	reducers: {
		setPhone: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, phone: payload } )
		},
		setTelegram: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, telegram: payload } )
		},
		setEmail: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, email: payload } )
		},
		setGitHub: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, gitHub: payload } )
		},
		setOther: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, other: payload } )
		},
		setContactData: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => payload
		},
		resetContactData: {
			reducer: ( state ) => ( {
																phone: "",
																telegram: "",
																email: "",
																gitHub: "",
																other: ""
															} )
		}
	}
})