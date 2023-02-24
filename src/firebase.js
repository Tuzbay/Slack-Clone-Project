import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNwvidSqD6ttdjyc_4S-dFeg8d_ebQVs0",
  authDomain: "slack-clone-project-e0d5d.firebaseapp.com",
  projectId: "slack-clone-project-e0d5d",
  storageBucket: "slack-clone-project-e0d5d.appspot.com",
  messagingSenderId: "918693056373",
  appId: "1:918693056373:web:bd9a06d4e18e734a58cd3c",
  measurementId: "G-7XZ7Z9516P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
