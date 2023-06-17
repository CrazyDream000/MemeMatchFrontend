import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZupJYnwC9TZUamcPQs5H6b1nrlGqxf5U",
  authDomain: "memematch-91ab9.firebaseapp.com",
  projectId: "memematch-91ab9",
  storageBucket: "memematch-91ab9.appspot.com",
  messagingSenderId: "669875291549",
  appId: "1:669875291549:web:ccf37962329db4b7cc9b74",
  measurementId: "G-X9Q5H7BQJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);