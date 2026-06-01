// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUnJKWV0c-Y6arKreqeKQ53pMXVK0_4P0",
  authDomain: "blogging-app-efba6.firebaseapp.com",
  projectId: "blogging-app-efba6",
  storageBucket: "blogging-app-efba6.firebasestorage.app",
  messagingSenderId: "964750346855",
  appId: "1:964750346855:web:e1f80036b666a56e2fa2c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);