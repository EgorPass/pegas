import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { loginState } from "./loginStore/loginStore";
import { authState } from "./authStore/authStore";
import { tasksStore } from "./tasksStore/tasksStore";
import { contactsStore } from "./contactsStore/contactsStore"
import { loaderItem } from "./loader/loaderSlice"
import { search } from "./search/searchSlice";

const rootReducer = combineReducers({ 
	contacts: contactsStore,
	tasks: tasksStore,
	login: loginState,
	auth: authState,
	loaderItem,
	search,

})

export const store = configureStore({
	initialState: {},
	reducer: rootReducer,
})