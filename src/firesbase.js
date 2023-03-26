
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuEsh1B9lzx7NzyCEYh5PaUJlPIf0ka80",
  authDomain: "yekfit-cb7ba.firebaseapp.com",
  projectId: "yekfit-cb7ba",
  storageBucket: "yekfit-cb7ba.appspot.com",
  messagingSenderId: "987864002699",
  appId: "1:987864002699:web:2ed763cb317d495ea5e48e",
  measurementId: "G-F3E7PJYEXD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();