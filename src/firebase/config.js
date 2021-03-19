import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDZASMXdO_usZfDp0Ogvz0mv_CfiiQ_N90",
  authDomain: "mae-scinuggets.firebaseapp.com",
  databaseURL: "https://mae-scinuggets.firebaseio.com",
  projectId: "mae-scinuggets",
  storageBucket: "mae-scinuggets.appspot.com",
  appId: process.env.appId,
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
