import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { loginState } from "./loginStore/loginStore";
import { authState } from "./authStore/authStore";

const reducers = combineReducers({ 
	login: loginState,
	auth: authState,
})

export const store = configureStore({
	initialState: {},
	reducer: reducers,
})