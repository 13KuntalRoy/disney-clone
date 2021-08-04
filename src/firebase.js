
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSekxFe0iTbVB5Q8OdDDM-kd-860qADlg",
  authDomain: "disney-clone-a5343.firebaseapp.com",
  projectId: "disney-clone-a5343",
  storageBucket: "disney-clone-a5343.appspot.com",
  messagingSenderId: "982671591302",
  appId: "1:982671591302:web:8e4cf94e2cc7368b100e07"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;