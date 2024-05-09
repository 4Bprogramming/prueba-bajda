// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi1JlCMfhk7hLCxoUQEQYjX44YheNv5AE",
  authDomain: "holads.firebaseapp.com",
  databaseURL: "https://holads-default-rtdb.firebaseio.com",
  projectId: "holads",
  storageBucket: "holads.appspot.com",
  messagingSenderId: "111699694477",
  appId: "1:111699694477:web:409aeacd405b4932b863c4",
  measurementId: "G-G1N0F3YZ0K"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase