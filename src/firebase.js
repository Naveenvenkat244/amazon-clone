import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBsJ7rwhgJEHZlo8WwbvYRDaTirUQOpf6k",
  authDomain: "clone-3c8d1.firebaseapp.com",
  databaseURL: "https://clone-3c8d1.firebaseio.com",
  projectId: "clone-3c8d1",
  storageBucket: "clone-3c8d1.appspot.com",
  messagingSenderId: "268798480282",
  appId: "1:268798480282:web:788c427478a267d8a23423",
  measurementId: "G-CZZ1Y36HSS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
