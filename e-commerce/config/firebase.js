// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJiTAnNBzkdQbY_0NQbzbwpDaNYiNW-Hk",
  authDomain: "e-commerce-ce223.firebaseapp.com",
  projectId: "e-commerce-ce223",
  storageBucket: "e-commerce-ce223.appspot.com",
  messagingSenderId: "119666068332",
  appId: "1:119666068332:web:340af682b8f8cb8acbc149"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);