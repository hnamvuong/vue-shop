import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn5fYNM4VgcEE8OB5p91FaIrEZi0QQGww",
    authDomain: "vue-shop-d6cec.firebaseapp.com",
    databaseURL: "https://vue-shop-d6cec.firebaseio.com",
    projectId: "vue-shop-d6cec",
    storageBucket: "vue-shop-d6cec.appspot.com",
    messagingSenderId: "872044389395",
    appId: "1:872044389395:web:530f3537c7d75326714be6",
    measurementId: "G-434S5Z0HB5"
  };
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fb,db}
