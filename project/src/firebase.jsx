
import {getFirestore} from "firebase/firestore";
// esto salio de la pagina de firebase en google.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYahU6aThYNQsEH4EVp2ikFA2BMYJWqXg",
  authDomain: "u-commerce-b80f8.firebaseapp.com",
  projectId: "u-commerce-b80f8",
  storageBucket: "u-commerce-b80f8.appspot.com",
  messagingSenderId: "888880637225",
  appId: "1:888880637225:web:87fe9b4e10283e98cf0338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

