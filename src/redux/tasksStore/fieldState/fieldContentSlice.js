import { createSlice } from "@reduxjs/toolkit";

export const { actions: fieldContentActions, reducer: fieldContent } = createSlice({
	name: "textField",
	initialState: {
		id: 0,
		title: "",
		description: "",
		deadline: "",
		isComplite: false,
	},
	reducers: {
		setFieldTitle: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => ( { ...state, title: payload } )
		},
		setFieldDescription: {
			prepare: ( val ) => ({ payload: val }),
			reducer: ( state, { payload } ) => ( {...state, description: payload } )
		},
		setFieldDeadline: {
			prepare: ( val ) => ({ payload: val }),
			reducer: ( state, { payload } ) => ( {...state, deadline: payload} )
		},
		setFieldIsComplite: {
			prepare: ( val ) => ( { payload: val} ),
			reducer: ( state, { payload } ) => ( { ...state, isComplite: payload } )
		},
		resetFieldContent: (state) => ({
			id: 0,
			title: "",
			description: "",
			deadline: "2023-02-05",
			isComplite: false,
		}),
		newFieldContent: {
			prepare: ( task ) => ( {payload: task} ),
			reducer: ( state, { payload } ) => ( { ...payload } )
		}

	}
})