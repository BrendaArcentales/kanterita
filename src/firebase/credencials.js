// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD5oN8-yafMoVKVM_psjz8hLbnZ8k63Uo",
  authDomain: "kanterita-70696.firebaseapp.com",
  projectId: "kanterita-70696",
  storageBucket: "kanterita-70696.appspot.com",
  messagingSenderId: "485932446606",
  appId: "1:485932446606:web:289f15db68648dfbbbeadf",
  measurementId: "G-G4Y9REZD4B"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
