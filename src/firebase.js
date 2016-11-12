import firebase from 'firebase'


// Initialize Firebase
const config = {
  apiKey: "AIzaSyAeTI3IMNkcp9W4hDimanB-kuwo1gat1d8",
  authDomain: "globaleyes-f7949.firebaseapp.com",
  databaseURL: "https://globaleyes-f7949.firebaseio.com",
  storageBucket: "globaleyes-f7949.appspot.com",
  messagingSenderId: "136874347212"
}

firebase.initializeApp(config)

export const firebaseDb = firebase.database()

export const firebaseAuth = firebase.auth()