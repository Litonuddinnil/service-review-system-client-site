// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOxVb4Ny2NqU_cJQlmDoEGK1atrV8gOSg",
  authDomain: "service-review-system-953ea.firebaseapp.com",
  projectId: "service-review-system-953ea",
  storageBucket: "service-review-system-953ea.firebasestorage.app",
  messagingSenderId: "917643315109",
  appId: "1:917643315109:web:5d0bf5b625bc34a1600a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};