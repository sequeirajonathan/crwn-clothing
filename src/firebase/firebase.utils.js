import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpalCJRZgMfSkXBW41hbNU2JWcKNrpMmI",
    authDomain: "crwn-db-452fe.firebaseapp.com",
    databaseURL: "https://crwn-db-452fe.firebaseio.com",
    projectId: "crwn-db-452fe",
    storageBucket: "crwn-db-452fe.appspot.com",
    messagingSenderId: "353610600540",
    appId: "1:353610600540:web:911568f6c3ab8b4fe59699",
    measurementId: "G-R52RH0FTRB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;