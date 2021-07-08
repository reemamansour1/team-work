import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBpicsleF3a7wzVawuhupI0bYu0fjmn9pk",
  authDomain: "final-project-a5be7.firebaseapp.com",
  projectId: "final-project-a5be7",
  storageBucket: "final-project-a5be7.appspot.com",
  messagingSenderId: "728929292583",
  appId: "1:728929292583:web:67610f2c9614c696865902"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()

export const auth = firebase.auth();
export const firestore = firebase.firestore();