// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp7ILWcarNbTHsCTAXZK2K_RHgV8p74Mg",
  authDomain: "stock-tracker-715cd.firebaseapp.com",
  projectId: "stock-tracker-715cd",
  storageBucket: "stock-tracker-715cd.appspot.com",
  messagingSenderId: "379510707787",
  appId: "1:379510707787:web:b171fe9fefc6f8741bdfce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);