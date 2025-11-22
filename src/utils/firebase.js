// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTJzpeSRol1IJsP2Fw7q6gE-g0knkHE9A",
    authDomain: "netflix-gpt-bcf8a.firebaseapp.com",
    projectId: "netflix-gpt-bcf8a",
    storageBucket: "netflix-gpt-bcf8a.firebasestorage.app",
    messagingSenderId: "840576071340",
    appId: "1:840576071340:web:5bc40dfcab038fc0cb9109",
    measurementId: "G-8NC0CNJL04"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

