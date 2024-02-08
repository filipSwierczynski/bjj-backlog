import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3MH9AxqtVz1wU462kX_M4_GGu2vn1mPY",
  authDomain: "bjj-backlog.firebaseapp.com",
  projectId: "bjj-backlog",
  storageBucket: "bjj-backlog.appspot.com",
  messagingSenderId: "468648762610",
  appId: "1:468648762610:web:1bf59a6c7e23b534d9c46b",
  measurementId: "G-QMCC0R0YMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);