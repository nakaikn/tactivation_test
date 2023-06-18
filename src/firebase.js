// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3zZuZzODkybgUQM6q4Hg9YVyU3F8bVz0",
  authDomain: "blog-791ce.firebaseapp.com",
  projectId: "blog-791ce",
  storageBucket: "blog-791ce.appspot.com",
  messagingSenderId: "833003309802",
  appId: "1:833003309802:web:e6512fee36e2e0f6fe6593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
