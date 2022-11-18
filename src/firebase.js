import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDigrMGJJZhWN0PoQN8-C2wDHSh1foqEzo",
    authDomain: "shsweb-24e85.firebaseapp.com",
    projectId: "shsweb-24e85",
    storageBucket: "shsweb-24e85.appspot.com",
    messagingSenderId: "114968129475",
    appId: "1:114968129475:web:8f22327c2ca31e82415776",
    measurementId: "G-0KCRM518N9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
