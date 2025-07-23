import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDNrYkf28DqZGr9rocOh4yOb9WJph_hK3s",
  authDomain: "capstone-d8645.firebaseapp.com",
  projectId: "capstone-d8645",
  storageBucket: "capstone-d8645.firebasestorage.app",
  messagingSenderId: "239027143946",
  appId: "1:239027143946:web:fcb125bd686f937639a6f3",
  measurementId: "G-PH40R98113"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

