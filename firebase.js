
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9KJFSKuPwsbaJPeJv_2dnNmg6-KQ04n4",
    authDomain: "disney-clone-18b66.firebaseapp.com",
    projectId: "disney-clone-18b66",
    storageBucket: "disney-clone-18b66.appspot.com",
    messagingSenderId: "525272143224",
    appId: "1:525272143224:web:e14c36807fb2f2c953248d"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };




