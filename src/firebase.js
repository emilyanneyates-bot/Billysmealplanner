import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZsC5twvCaFIkKx1FuBk-Rfg184kP6Eqw",
  authDomain: "billy-meal-planner.firebaseapp.com",
  projectId: "billy-meal-planner",
  storageBucket: "billy-meal-planner.firebasestorage.app",
  messagingSenderId: "74360353607",
  appId: "1:74360353607:web:1544729da1346d59dc5262"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
