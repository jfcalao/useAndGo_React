import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEDioaWaon16FBfGkjtOHdAkHjn3HQ-nQ",
    authDomain: "usego-c6e78.firebaseapp.com",
    databaseURL: "https://usego-c6e78.firebaseio.com",
    projectId: "usego-c6e78",
    storageBucket: "usego-c6e78.appspot.com",
    messagingSenderId: "225485638186",
    appId: "1:225485638186:web:8c7624d2dbc04e68e11153"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};