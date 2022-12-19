import { createSlice } from "@reduxjs/toolkit";

export const { actions: fieldFilesActions, reducer: fieldFiles } = createSlice({
	name: "taskFile",
	initialState: {},
	reducers: {
		setFieldFiles: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, ...payload } )
		},
		removeFieldFiles: {
			prepare: ( fileId ) => ( { payload: fileId } ),
			reducer: ( state, { payload } ) => {
				const res = Object.entries( state ).filter( ( [key, val] ) => {
					return key !== payload;
				})

				return Object.fromEntries( res );
			}
		},
		resetFieldFiles: ( state ) => ( {} )
	}

})