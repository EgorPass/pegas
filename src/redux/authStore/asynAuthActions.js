import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getAuth,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth"

function setStorage(login) {
	window.localStorage.setItem( "pegas-user",login )
	window.localStorage.setItem( "pegas-user-login", login )
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

			setStorage(user.user.email)
			
			return user.user.email
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
			
			setStorage(user.user.email)

				return user.user.email
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
						
			window.localStorage.setItem( "pegas-user", "" )
		
		}
		catch ( err ) {
			if ( err instanceof Error ) {
				return rejectWithValue( err.message )
			}
		}

	}
)

