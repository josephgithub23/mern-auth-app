// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-771b2.firebaseapp.com",
  projectId: "mern-auth-771b2",
  storageBucket: "mern-auth-771b2.appspot.com",
  messagingSenderId: "406529441518",
  appId: "1:406529441518:web:d4dd7ceebd73810ea17dff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
