// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ref, getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgVjrNXgfCzU2yJTO__XlUIke4vVZxSBg",
  authDomain: "stridecastapp.firebaseapp.com",
  projectId: "stridecastapp",
  storageBucket: "stridecastapp.appspot.com",
  messagingSenderId: "374673236483",
  appId: "1:374673236483:web:d8fc80a736e4c5bb502436",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const dbRef = ref(database);
