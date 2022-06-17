import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB-fyDjvHV6UPzss6RDZImTnpHkH43XiU",
  authDomain: "clone-e178e.firebaseapp.com",
  projectId: "clone-e178e",
  storageBucket: "clone-e178e.appspot.com",
  messagingSenderId: "944079759389",
  appId: "1:944079759389:web:971eb8d3aa9fc62085bef4",
  measurementId: "G-R9KEE383PD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth();

export { db, auth, createUserWithEmailAndPassword };