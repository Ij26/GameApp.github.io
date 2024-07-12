// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf_lijgeu_ZcDMzuxchVwM41GOmL9E4q0",
  authDomain: "catoff-fd624.firebaseapp.com",
  projectId: "catoff-fd624",
  storageBucket: "catoff-fd624.appspot.com",
  messagingSenderId: "100246516729",
  appId: "1:100246516729:web:56159e37ca90ff7c0b0328",
  measurementId: "G-YN0RZNNXGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
