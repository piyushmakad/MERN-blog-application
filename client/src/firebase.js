// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bef62.firebaseapp.com",
  projectId: "mern-blog-bef62",
  storageBucket: "mern-blog-bef62.appspot.com",
  messagingSenderId: "189989090996",
  appId: "1:189989090996:web:d9b23ec49c4e5c640849e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
