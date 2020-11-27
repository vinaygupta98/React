import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0PA9hxuo2f6LsSmwU5IdDuc3tWo0y7cA",
  authDomain: "amzon-clone-abfa1.firebaseapp.com",
  databaseURL: "https://amzon-clone-abfa1.firebaseio.com",
  projectId: "amzon-clone-abfa1",
  storageBucket: "amzon-clone-abfa1.appspot.com",
  messagingSenderId: "271337427778",
  appId: "1:271337427778:web:6eb89d41204a7ebb22eedb",
  measurementId: "G-40EQJEXGSV",
});

// const db = firebase.firestore();
const auth = firebase.auth();
export default firebase;
export { auth };
