// Import the functions you need from the SDKs you need
import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update, connectDatabaseEmulator } from 'firebase/database';
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, connectAuthEmulator, signInWithCredential } from 'firebase/auth';
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
const database = getDatabase(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(app), setUser)
  ), []);

  return [user];
};