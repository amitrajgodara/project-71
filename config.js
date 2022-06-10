import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAXN6sb9JSU8IlXeD8lCqy1aoaeZR7m5xU",
    authDomain: "e-ride-74ec2.firebaseapp.com",
    projectId: "e-ride-74ec2",
    storageBucket: "e-ride-74ec2.appspot.com",
    messagingSenderId: "617949583489",
    appId: "1:617949583489:web:cfabd850660057e632d580",
    measurementId: "G-FQLSSLDY4E"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
