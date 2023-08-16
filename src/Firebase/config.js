import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGOgyx6qsiiUxPAxnoCZg2KYcS7UXXkiw",
  authDomain: "coder-ecommerce-7930d.firebaseapp.com",
  projectId: "coder-ecommerce-7930d",
  storageBucket: "coder-ecommerce-7930d.appspot.com",
  messagingSenderId: "707151874262",
  appId: "1:707151874262:web:ef4fd7f442e2788609a177"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);