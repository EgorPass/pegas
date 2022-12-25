import { combineReducers } from "@reduxjs/toolkit"
import { contactName } from "./contactNameSlice"
import { contactData } from "./contactDataSlice"
import { contactState } from "./contactStateSlice"
import { contacts } from "./contactsSlice"

export const contactsStore = combineReducers({
	contacts,
	contactName,
	contactData,
	contactState,
})