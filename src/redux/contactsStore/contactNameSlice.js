import { createSlice } from "@reduxjs/toolkit";

export const { actions: contactNameActions, reducer: contactName } = createSlice({
	name: "contactName",
	initialState: {
		id: 0,
		name: "",
		surName: "",
		secondName: "",
	},
	reducers: {
		setId: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, id: payload } )
		},
		setName: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, name: payload } )
		},
		setSurName: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, surName: payload } )
		},
		setSecondName: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, secondName: payload } )
		},
		setNameData: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => payload
		},
		resetNameData: {
			reducer: ( state ) => ( { id: 0, name: "", surName: "", secondName: "" } )
		},
	}
})