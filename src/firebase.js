import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAk52eo0ITI4AJqIxCF-bEUY6YRNAqSk_0",
    authDomain: "instagram-clone-curso.firebaseapp.com",
    projectId: "instagram-clone-curso",
    storageBucket: "instagram-clone-curso.appspot.com",
    messagingSenderId: "605506139553",
    appId: "1:605506139553:web:9cb460c8b5d1cca325c7e0",
    measurementId: "G-R64BQP39EM"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};