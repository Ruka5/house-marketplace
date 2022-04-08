
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgW2kavsgu5CC9Qo_3urVWUPTEjf6yhXs",
  authDomain: "house-marketplace-app-84d7e.firebaseapp.com",
  projectId: "house-marketplace-app-84d7e",
  storageBucket: "house-marketplace-app-84d7e.appspot.com",
  messagingSenderId: "407234061933",
  appId: "1:407234061933:web:f505e065e1073280800164"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()