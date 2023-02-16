import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
const firebaseConfig = {
  apiKey: "AIzaSyDqpWYehcbBZFhUQCWE7v2vArmFooQeJrg",
  authDomain: "cn-chatapp.firebaseapp.com",
  projectId: "cn-chatapp",
  storageBucket: "cn-chatapp.appspot.com",
  messagingSenderId: "671421154226",
  appId: "1:671421154226:web:c3c3aab8ccd712bce41aab"
};

// Checking if app already initialize then don't initialize again
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { db, auth, googleProvider, storage };
