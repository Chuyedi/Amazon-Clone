import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANYepLnZqrLdjD6rrkCzN29ZaMKZPFw3k",
  authDomain: "fir-8813c.firebaseapp.com",
  projectId: "fir-8813c",
  storageBucket: "fir-8813c.firebasestorage.app",
  messagingSenderId: "628987285186",
  appId: "1:628987285186:web:23f608ac5d53859674355b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
