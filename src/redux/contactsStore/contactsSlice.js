import { createSlice } from "@reduxjs/toolkit";

export const { actions: contactsActions, reducer: contacts} = createSlice ({
	name: "contacts",
	initialState: [],
	reducers: {
		getContacts: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => payload
		}
	}
})