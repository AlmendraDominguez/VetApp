import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"
//Permisos
const firebaseConfig = {
  apiKey: "AIzaSyAMaI5G7apUchKZKsoUDpt_7Trcs3FfYOo",
  authDomain: "vetapp-3a922.firebaseapp.com",
  projectId: "vetapp-3a922",
  storageBucket: "vetapp-3a922.appspot.com",
  messagingSenderId: "64289299579",
  appId: "1:64289299579:web:0ba7ad630cc822c792d6de"
};
// Inicializo Firebase
const app = initializeApp(firebaseConfig);
// Inicializo Firebase Authentication
export const auth = getAuth(app);
//Inicializo Firebase Firestore
export const db = getFirestore(app);