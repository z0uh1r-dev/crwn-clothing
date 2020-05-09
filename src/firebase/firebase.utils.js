import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBytLPpJwXnCA4Yf4HxB7piQkBkJoLnZug",
  authDomain: "crown-db-1885b.firebaseapp.com",
  databaseURL: "https://crown-db-1885b.firebaseio.com",
  projectId: "crown-db-1885b",
  storageBucket: "crown-db-1885b.appspot.com",
  messagingSenderId: "429190957835",
  appId: "1:429190957835:web:d32758d627a8a83cf5700e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;