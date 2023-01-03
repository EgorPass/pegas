import { createSlice } from "@reduxjs/toolkit";

export const { actions: contactIdActions, reducer: contactId } = createSlice({
	name: "contactId",
	initialState: 0,
	reducers: {
		setContactId: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => payload
		},
	}
})

