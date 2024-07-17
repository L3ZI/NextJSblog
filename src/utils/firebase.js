// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-3feef.firebaseapp.com",
    projectId: "blog-3feef",
    storageBucket: "blog-3feef.appspot.com",
    messagingSenderId: "283435517488",
    appId: "1:283435517488:web:5745922783b9cb22278ff5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);