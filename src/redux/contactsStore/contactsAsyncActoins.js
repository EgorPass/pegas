import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage"

export const getImage = createAsyncThunk(
	"contactPhoto/get",
	async function( { user, contactId, fileId, name }, {rejectWithValue, dispatch } ) {
		console.log(user, " , " , contactId)

		try {
			const url = await getDownloadURL(
				storageRef(
					getStorage(),
					`/contacts/${ user }/${ contactId }/contactPhoto/${ fileId }/${ name }` ) )

			return {
				name,
				fileId,
				url,
			}

		}
		catch ( err ) {
			if  (err instanceof Error ) {
				console.log(err.message)
				return rejectWithValue( err.message );
			}
		}

	}
)