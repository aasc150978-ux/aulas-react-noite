import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd16dPwwLb-l3PkbYoGmh49MYBdGncyXI",
  authDomain: "app-firebase-learn-1ecfa.firebaseapp.com",
  projectId: "app-firebase-learn-1ecfa",
  storageBucket: "app-firebase-learn-1ecfa.firebasestorage.app",
  messagingSenderId: "391142705535",
  appId: "1:391142705535:web:3595c0e1bcddbf0ade324a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

