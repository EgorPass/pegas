import { createSlice } from "@reduxjs/toolkit"

export const { actions: contactPhotoActions, reducer: contactPhoto } = createSlice({
	name: "contactPhoto",
	initialState: {
		status: "",
		url: "",
		path: '',
		upload: false,
	},
	reducers: {
		setContactPhotoStatus: {
			prepare: (val) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, status: payload } )
		},
		setContactPhotoPath: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { 	...state,	path: payload, } ),
		},
		setContactPhotoUrl: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( {
				...state,
				url: payload.url,
				status: payload.status,
			})
		},
		setContactPhotoUpload: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, upload: payload } )
		},
		resetContactPhoto: () => ({
			url: "",
			path: "",
			status: "",
			upload: false,
		})
	}
})


