// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, get, child } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "TVŮJ_API_KEY",
  authDomain: "havlickova-ty-cinky.firebaseapp.com",
  databaseURL: "https://havlickova-ty-cinky-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "havlickova-ty-cinky",
  storageBucket: "havlickova-ty-cinky.appspot.com",
  messagingSenderId: "TVŮJ_SENDER_ID",
  appId: "TVŮJ_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, get, child };
