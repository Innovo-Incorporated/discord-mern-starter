import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN6cVhSzhs64pXnTQ8QqulVqrf31AJPG8",
  authDomain: "discord-f0486.firebaseapp.com",
  databaseURL: "https://discord-f0486.firebaseio.com",
  projectId: "discord-f0486",
  storageBucket: "discord-f0486.appspot.com",
  messagingSenderId: "198422160339",
  appId: "1:198422160339:web:729ed4ca74433cef690526",
  measurementId: "G-CMG2V852S3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
