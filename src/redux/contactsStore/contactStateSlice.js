import { createSlice } from "@reduxjs/toolkit";

export const { actions: contactStateActions, reducer: contactState } = createSlice({
	name: "contactState",
	initialState: {
		openContact: false,
		// newContact: false,
	},
	reducers: {
		setOpenContact: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: (state, { payload } ) => ( { ...state, openContact: payload } )
		},
	}
})