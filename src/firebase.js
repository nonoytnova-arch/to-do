import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDU8uDT6RHLYSTg1dEfqljDt0POTCwO-_k",
  authDomain: "todo-list-da363.firebaseapp.com",
  databaseURL:
"https://todo-list-da363-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-da363",
  storageBucket: "todo-list-da363.firebasestorage.app",
  messagingSenderId: "97713163652",
  appId: "1:97713163652:web:15fc2dc9438fd035ab61d1"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);