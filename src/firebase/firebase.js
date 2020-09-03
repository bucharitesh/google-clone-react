import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCd1v0MFkGotzJmV5ro5KNDu7MQ1VIE9-k",
  authDomain: "react-clone-18cae.firebaseapp.com",
  databaseURL: "https://react-clone-18cae.firebaseio.com",
  projectId: "react-clone-18cae",
  storageBucket: "react-clone-18cae.appspot.com",
  messagingSenderId: "1098703830221",
  appId: "1:1098703830221:web:279406479d2fb2bcb6bd84",
  measurementId: "G-C9T96BYB1P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth  = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
