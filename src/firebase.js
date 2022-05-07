import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmPrcSQWgjMyJWEA6Wh4R738_25Sq3pC8",
  authDomain: "clone-6b83f.firebaseapp.com",
  projectId: "clone-6b83f",
  storageBucket: "clone-6b83f.appspot.com",
  messagingSenderId: "949770405885",
  appId: "1:949770405885:web:3bd11103f6d72556aafb94",
  measurementId: "G-M6JWH5L6J0",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
