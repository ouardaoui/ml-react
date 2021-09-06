import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCKOA7HyT4g_mKZQ-ioa9Qjorhzoe_GfKc",
  authDomain: "unique-cinema-323410.firebaseapp.com",
  databaseURL: "https://unique-cinema-323410-default-rtdb.firebaseio.com",
  projectId: "unique-cinema-323410",
  storageBucket: "unique-cinema-323410.appspot.com",
  messagingSenderId: "1054353054353",
  appId: "1:1054353054353:web:f6394303402879317cfd30",
  measurementId: "G-QL0MFBQ6GF"  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
