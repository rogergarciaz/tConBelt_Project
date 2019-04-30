import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
   apiKey: "AIzaSyCiN9p45gA0IwozM7lKSEKbSuILUNYmm-o",
   authDomain: "tconbelt.firebaseapp.com",
   databaseURL: "https://tconbelt.firebaseio.com",
   projectId: "tconbelt",
   storageBucket: "tconbelt.appspot.com",
   messagingSenderId: "99500468615"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  db,
  auth,
  storage,
};