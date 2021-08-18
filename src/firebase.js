import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbgxwP2qmOZ5fni-ElPm69VfQEcCSasPM",
  authDomain: "todo-app-f5c4d.firebaseapp.com",
  projectId: "todo-app-f5c4d",
  storageBucket: "todo-app-f5c4d.appspot.com",
  messagingSenderId: "458821394922",
  appId: "1:458821394922:web:ee9880975688603e88d293",
  measurementId: "G-L47V002T6F",
});

const db = firebaseApp.firestore();

export default db;
