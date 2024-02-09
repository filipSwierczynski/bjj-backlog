import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the Firebase Authentication service
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3MH9AxqtVz1wU462kX_M4_GGu2vn1mPY",
  authDomain: "bjj-backlog.firebaseapp.com",
  projectId: "bjj-backlog",
  storageBucket: "bjj-backlog.appspot.com",
  messagingSenderId: "468648762610",
  appId: "1:468648762610:web:1bf59a6c7e23b534d9c46b",
  measurementId: "G-QMCC0R0YMF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };