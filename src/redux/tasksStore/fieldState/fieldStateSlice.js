import { createSlice } from "@reduxjs/toolkit"

export const { actions: fieldStateActions, reducer: fieldState } = createSlice({
	name: "fieldState",
	initialState: {
		openField: false,
		newField: false,
	},
	reducers: {
		setOpenField: {
			prepare: ( val ) => ( { payload: val } ),
			reducer: ( state, { payload } ) => {
				return { ...state, openField: payload }
			}
		},
		setNewField: {
			prepare: ( val ) => ({ payload: val }),
			reducer: ( state, { payload } ) => {
				return { ...state, newField: payload }
			}
		},
		setNewFieldState: (state) => (
			{
				openField: true,
				newField: true,
			})
	}
})