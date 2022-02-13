// Copy script from firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_XrzNmwCluCbkLFxgOfBLt_Miu875hXQ",
  authDomain: "challenge-47a7f.firebaseapp.com",
  projectId: "challenge-47a7f",
  storageBucket: "challenge-47a7f.appspot.com",
  messagingSenderId: "47588600323",
  appId: "1:47588600323:web:e1de8bc4f61cc0b6ea7c36",
  measurementId: "G-K0CFLHWE6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);