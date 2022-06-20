// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEs_QqeZcX5w5FKTjUscrcl7JkhAAz4SM",
    authDomain: "reto-cp-d045d.firebaseapp.com",
    projectId: "reto-cp-d045d",
    storageBucket: "reto-cp-d045d.appspot.com",
    messagingSenderId: "583949919755",
    appId: "1:583949919755:web:41374be5699ce9ff5a090e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);