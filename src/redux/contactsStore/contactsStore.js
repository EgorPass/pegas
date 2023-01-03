import { combineReducers } from "@reduxjs/toolkit"
import { contactName } from "./contactNameSlice"
import { contactData } from "./contactDataSlice"
import { contactState } from "./contactStateSlice"
import { contacts } from "./contactsSlice"
import { contactId } from "./contactsIdSlice"
import { contactPhoto } from "./contactsPhoto"
import { uploadFile } from "./uploadFileSlice"

export const contactsStore = combineReducers({
	contacts,
	contactId,
	contactState,
	contactName,
	contactData,
	contactPhoto,
	uploadFile,
})