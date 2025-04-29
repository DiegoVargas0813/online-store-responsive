import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaPIm1N5wV76xeOXK9LOKlYdg_NpTD560",
    authDomain: "e-store-a01635782.firebaseapp.com",
    projectId: "e-store-a01635782",
    storageBucket: "e-store-a01635782.firebasestorage.app",
    messagingSenderId: "927681077583",
    appId: "1:927681077583:web:86736b79228f1c24bca53a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);