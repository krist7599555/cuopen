// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
// import 'firebase/auth';
// import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAHrcLvl75Khj5mjQ8aZ30_gYQtDirTyWQ',
  authDomain: 'cuopen-9a3af.firebaseapp.com',
  databaseURL: 'https://cuopen-9a3af.firebaseio.com',
  projectId: 'cuopen-9a3af',
  storageBucket: '',
  messagingSenderId: '992488858075',
  appId: '1:992488858075:web:72abe9ba221c5a68'
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database;
