// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiVIHAdcLVHMJWyuXLxiIhvw8kPE6y2WM",
  authDomain: "logo-62c2a.firebaseapp.com",
  projectId: "logo-62c2a",
  storageBucket: "logo-62c2a.firebasestorage.app",
  messagingSenderId: "659716796638",
  appId: "1:659716796638:web:1e4ccf6b167ed39b0d124f",
  measurementId: "G-EY44GCEDPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);