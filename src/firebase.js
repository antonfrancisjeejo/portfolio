import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmDl-mSuZAS3hC42-R3mK86Lw8dTsPep4",
  authDomain: "portfolio-d9a86.firebaseapp.com",
  databaseURL: "https://portfolio-d9a86.firebaseio.com",
  projectId: "portfolio-d9a86",
  storageBucket: "portfolio-d9a86.appspot.com",
  messagingSenderId: "688739917798",
  appId: "1:688739917798:web:2d7406da82dcc4b2c0c027",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = new firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
