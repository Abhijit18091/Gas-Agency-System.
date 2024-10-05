import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-K0rki-WzeKyDAgGc2s85GYP04OBbr6k",
  authDomain: "hp-gas-b34b9.firebaseapp.com",
  databaseURL: "https://hp-gas-b34b9-default-rtdb.firebaseio.com",
  projectId: "hp-gas-b34b9",
  storageBucket: "hp-gas-b34b9.appspot.com",
  messagingSenderId: "776573944190",
  appId: "1:776573944190:web:9cd0f744e047000012b32f",
  measurementId: "G-MMYML3X1V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
   