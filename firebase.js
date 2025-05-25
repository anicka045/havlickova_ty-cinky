// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, get, child } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCm73AHVHctySyU3x2n1WgATqWRLiccAJA",
  authDomain: "havlickova-ty-cinky.firebaseapp.com",
  databaseURL: "https://havlickova-ty-cinky-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "havlickova-ty-cinky",
  storageBucket: "havlickova-ty-cinky.appspot.com",
  messagingSenderId: "56449306745",
  appId: "1:56449306745:web:e52c7d24296cb9cbac04a8"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, get, child };
