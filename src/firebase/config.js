import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDZASMXdO_usZfDp0Ogvz0mv_CfiiQ_N90",
  authDomain: "mae-scinuggets.firebaseapp.com",
  databaseURL: "https://mae-scinuggets.firebaseio.com",
  projectId: "mae-scinuggets",
  storageBucket: "mae-scinuggets.appspot.com",
  messagingSenderId: "821075835777",
  appId: "1:821075835777:web:fd5ce2121d286a7dc50680",
  measurementId: "G-Z8WTN06KPX",
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const server = firebase;
export default server;
