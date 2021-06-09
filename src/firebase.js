// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOPF8ahw0kdUuLX5ST8zOmPjZLRcyKBKA",
    authDomain: "clone-37ceb.firebaseapp.com",
    databaseURL:"https://clone-37ceb.firebaseio.com",
    projectId: "clone-37ceb",
    storageBucket: "clone-37ceb.appspot.com",
    messagingSenderId: "69429045205",
    appId: "1:69429045205:web:fbe193387eb24669187f5c",
    measurementId: "G-BQ0J56T41X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};