// import firebase from 'firebase';

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC_XrzNmwCluCbkLFxgOfBLt_Miu875hXQ",
  authDomain: "challenge-47a7f.firebaseapp.com",
  projectId: "challenge-47a7f",
  storageBucket: "challenge-47a7f.appspot.com",
  messagingSenderId: "47588600323",
  appId: "1:47588600323:web:e1de8bc4f61cc0b6ea7c36",
  measurementId: "G-K0CFLHWE6C"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default { db, auth };
// export default firebase;