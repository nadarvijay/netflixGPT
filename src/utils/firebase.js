// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByA1vB2s9QP7zpQrC_hsiP6MNE2XomWAc",
    authDomain: "trailerverse-2b6b0.firebaseapp.com",
    projectId: "trailerverse-2b6b0",
    storageBucket: "trailerverse-2b6b0.firebasestorage.app",
    messagingSenderId: "981218908902",
    appId: "1:981218908902:web:eaa0582c0932b7ab1cf927"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

