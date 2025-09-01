// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcekmWYF_sPYOokzO7zF_qufgfvhsXgEE",
  authDomain: "dragon-news-auth-610c9.firebaseapp.com",
  projectId: "dragon-news-auth-610c9",
  storageBucket: "dragon-news-auth-610c9.firebasestorage.app",
  messagingSenderId: "804464162724",
  appId: "1:804464162724:web:aee1067cc32998fd3d7331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;