// do set up and initialisation
// use import.meta.env.VARIABLE_NAME to access env variables (Vite-specific)
// someValue = import.meta.env.VITE_SOME_VALUE


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA-VZvKI5hu4rwQNSeAkoR9OHQx4Ul2eg",
  authDomain: "baas-starter-db5f5.firebaseapp.com",
  projectId: "baas-starter-db5f5",
  storageBucket: "baas-starter-db5f5.appspot.com",
  messagingSenderId: "246652013969",
  appId: "1:246652013969:web:d6efb19fb9528bc7735e30",
  measurementId: "G-LL0W0RWFTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);