import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCUQrp7b9QPtfu9KOqHjVs4kFhdnznnynU",
    authDomain: "dona-cabellos.firebaseapp.com",
    projectId: "dona-cabellos",
    storageBucket: "dona-cabellos.appspot.com",
    messagingSenderId: "585894351653",
    appId: "1:585894351653:web:d1f25343f263be52d740cc",
    measurementId: "G-W6B8WSJ189"
})

export default app
