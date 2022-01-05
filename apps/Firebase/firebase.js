// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQJ9RrZL8w16xKHsDY2LMw9JXnlIKpS4",
  authDomain: "hue-banking-3b235.firebaseapp.com",
  projectId: "hue-banking-3b235",
  storageBucket: "hue-banking-3b235.appspot.com",
  messagingSenderId: "23447941753",
  appId: "1:23447941753:web:349b7da5da4ea26dea9aa8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()
export default firebase;
