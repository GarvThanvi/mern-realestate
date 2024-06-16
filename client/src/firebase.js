// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-60e85.firebaseapp.com",
  projectId: "real-estate-60e85",
  storageBucket: "real-estate-60e85.appspot.com",
  messagingSenderId: "29360454173",
  appId: "1:29360454173:web:4711752c3166687dbea4f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);