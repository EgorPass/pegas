import { createSlice } from "@reduxjs/toolkit"


export const { actions: LoaderActions, reducer: loaderItem } = createSlice({
	name: "loaderItem",
	initialState: "",
	reducers: {
		setLoader: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => payload
		}
	}
})