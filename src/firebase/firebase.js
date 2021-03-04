import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAi44A_vIiRkUy2Lye009oZOpaLqJh76QA',
  authDomain: 'linkedin-by-azamov.firebaseapp.com',
  projectId: 'linkedin-by-azamov',
  storageBucket: 'linkedin-by-azamov.appspot.com',
  messagingSenderId: '611722797933',
  appId: '1:611722797933:web:5c0842fef4d0fa9c763064',
  measurementId: 'G-3XMTQJ0Z60',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
