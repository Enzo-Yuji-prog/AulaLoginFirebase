import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApjr0hvr2R77h5btj8HVzBnqEKuIhG5W0",
  authDomain: "enzopw.firebaseapp.com",
  projectId: "enzopw",
  storageBucket: "enzopw.firebasestorage.app",
  messagingSenderId: "1062966594809",
  appId: "1:1062966594809:web:37e590f2e4f5b8003c2628",
  measurementId: "G-TZFPXZCVX6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);