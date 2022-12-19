import { combineReducers } from "@reduxjs/toolkit"

import { loader } from "./createLoader.js"
import { tasks } from "./tasksSlice.js"

import { search } from "./headerState/searchSlice.js"

import { fieldState } from "./fieldState/fieldStateSlice.js"
import { fieldContent } from "./fieldState/fieldContentSlice.js"
import { fieldFiles } from "./fieldState/taskFileSlice.js"
import { uploadFile } from "./fieldState/uploadFileSlice.js"


export const tasksStore = combineReducers ({
		loader,
		
		tasks,
		search,

		fieldState,
		fieldContent,
		fieldFiles,
		uploadFile,
})
