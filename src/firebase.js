// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR7XGYlM9rrmYatbwZVPbvNiqtfUzDS4w",
  authDomain: "pegas-d16a5.firebaseapp.com",
  projectId: "pegas-d16a5",
  storageBucket: "pegas-d16a5.appspot.com",
  messagingSenderId: "698225628794",
	appId: "1:698225628794:web:26c6c7bb807cdbdae3cdc3",
	databaseURL: "https://pegas-d16a5-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

getDatabase(app)
