import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDigrMGJJZhWN0PoQN8-C2wDHSh1foqEzo",
  authDomain: "shsweb-24e85.firebaseapp.com",
  projectId: "shsweb-24e85",
  storageBucket: "shsweb-24e85.appspot.com",
  messagingSenderId: "114968129475",
  appId: "1:114968129475:web:127469dcf59a6301415776",
  measurementId: "G-G5S9D4S74J"
}

firebase.initializeApp(firebaseConfig);

export let db = firebase.firestore();

