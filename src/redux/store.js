import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { loginState } from "./loginStore/loginStore";
import { authState } from "./authStore/authStore";
import { tasksStore } from "./tasksStore/tasksStore";

const rootReducer = combineReducers({ 
	tasks: tasksStore,
	login: loginState,
	auth: authState,
})

export const store = configureStore({
	initialState: {},
	reducer: rootReducer,
})