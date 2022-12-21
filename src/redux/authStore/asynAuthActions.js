import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getAuth,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth"

function emailNormalize(email) {
	return email.replace(/\./gi, "_")
}

function setStorage( login, email ) {
	window.localStorage.setItem( "pegas-user",login )
	window.localStorage.setItem( "pegas-user-login", email )
	// window.localStorage.setItem( "pegas-user-uid", uid )
}

function removeStorage() {
	window.localStorage.setItem( "pegas-user","" )
	// window.localStorage.setItem( "pegas-user-login", "" )
	// window.localStorage.setItem( "pegas-user-uid", "" )
}

export const loginAtFirebase = createAsyncThunk(
	"auth/log",
	async function( { login, password },  {rejectWithValue, dispatch } ) {

		// пока что сделаем и проверим воход
		// указания постояннства setPersistence

		// оставляем долгую сессию, так пиздаче
		// не нужно делать авторизацию при каждом
		// запуске браузера

		try {
			const auth = getAuth();
			const user = await signInWithEmailAndPassword( auth, login, password )

			const email = emailNormalize( user.user.email )

			setStorage(email, user.user.email)

			return email
		}
		catch( err ) {
			if ( err instanceof Error ) {
				return rejectWithValue( err.message )
			}
		}
	}
)

export const reginAtFirebase = createAsyncThunk(
	"auth/reg",
	async function( { login, password }, { rejectWithValue,dispatch } ) {
		
		try {
			const auth = getAuth();
			const user = await createUserWithEmailAndPassword( auth, login, password )
			
			const email = emailNormalize( user.user.email )


			setStorage(email, user.user.email)

				return email
		}
		catch( err ) {
			if ( err instanceof Error ) {
				return rejectWithValue( err.message )
			}
		}
	}
)

export const logoutAtFirebase = createAsyncThunk(
	"auth/out",
	async function ( _, { rejectWithValue } ) {
		
		try {
			const auth = getAuth()		
			await signOut( auth )
						
			removeStorage()
		
		}
		catch ( err ) {
			if ( err instanceof Error ) {
				return rejectWithValue( err.message )
			}
		}

	}
)

