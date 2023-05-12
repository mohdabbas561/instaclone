// Import the functions you need from the SDKs you need
import 'firebase/auth';
import * as Firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDmOO3BTk6HfUPq__xiv4M-D30iaPrHSus",
  authDomain: "instagram-e9ca0.firebaseapp.com",
  databaseURL: "https://instagram-e9ca0-default-rtdb.firebaseio.com",
  projectId: "instagram-e9ca0",
  storageBucket: "instagram-e9ca0.appspot.com",
  messagingSenderId: "37707779674",
  appId: "1:37707779674:web:ab35549d6cbbb210ee9263",
  measurementId: "G-00WT25MCFL"
};

const firebase = Firebase.initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);
const storage = getStorage(firebase);
// const analytics = getAnalytics(app);

export  { firebase , firestore, storage };