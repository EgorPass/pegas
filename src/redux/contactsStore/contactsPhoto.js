import { createSlice } from "@reduxjs/toolkit"

export const { actions: contactPhotoActions, reducer: contactPhoto } = createSlice({
	name: "contactPhoto",
	initialState: {
		fileId: "",
		name: "",
		url: "",
		path: '',
	},
	reducers: {
		setContactPhotoStore: {
			prepare: ({ fileId, name,  path, url }) => ( { payload: { fileId, path, url, name } } ),
			reducer: ( state, { payload } ) => ( { ...state,  ...payload } )
		},
		setContactPhotoPath: {
			prepare: (  val ) => ( { payload: val } ),
			reducer: (state, { payload }) => ({ ...state, path: payload } )
		},
		setContactPhotoUrl: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, 	url: payload	} )
		},
		setContactPhotoFileId: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, fileId: payload } )
		},
		resetContactPhoto: () => ({
			fileId: "",
			url: "",
			path: "",
			name: ""
		})
	}
})


