// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVKJ9Igvt7edjZ0nCeU94T0DjYG4saJv4",
  authDomain: "pantryinventory-ad35a.firebaseapp.com",
  projectId: "pantryinventory-ad35a",
  storageBucket: "pantryinventory-ad35a.appspot.com",
  messagingSenderId: "364473164159",
  appId: "1:364473164159:web:c0e81bf1b94edede0dba4a",
  measurementId: "G-YE598W722R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const analytics = getAnalytics(app);
export{app, firestore}