import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "mae-scinuggets.firebaseapp.com",
  databaseURL: process.env.databaseURL,
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
