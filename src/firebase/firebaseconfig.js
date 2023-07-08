// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC16o19AN1hBV6JsdhXXVw2plRi2oHTkLI",
  authDomain: "ecommerce-78812.firebaseapp.com",
  projectId: "ecommerce-78812",
  storageBucket: "ecommerce-78812.appspot.com",
  messagingSenderId: "152472281342",
  appId: "1:152472281342:web:d0eaf6033a0e02f2b545af",
  measurementId: "G-D7N065HV94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)