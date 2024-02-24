import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjI0vsExChzXfE3M5SelGyf5Pa6YZnw3c",
  authDomain: "proyectofinal-deseta.firebaseapp.com",
  projectId: "proyectofinal-deseta",
  storageBucket: "proyectofinal-deseta.appspot.com",
  messagingSenderId: "830800222585",
  appId: "1:830800222585:web:6a538e959539cc76e5b7a8",
  measurementId: "G-H9DCKLL4QX"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
