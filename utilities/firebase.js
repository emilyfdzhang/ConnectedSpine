// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPOkyUz5CWBVtnnEbCiXHigIbsRggAVxQ",
  authDomain: "connectedspine-6185c.firebaseapp.com",
  projectId: "connectedspine-6185c",
  storageBucket: "connectedspine-6185c.appspot.com",
  messagingSenderId: "1007989386438",
  appId: "1:1007989386438:web:ae244de67f858f182efbc7",
  measurementId: "G-HWSQ69B24Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);