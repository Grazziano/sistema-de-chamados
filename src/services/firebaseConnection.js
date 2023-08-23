import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCa9lC7mluRZxVir-FJKhtPZMlWAIwX-m4',
  authDomain: 'tickets-e6877.firebaseapp.com',
  projectId: 'tickets-e6877',
  storageBucket: 'tickets-e6877.appspot.com',
  messagingSenderId: '377511395647',
  appId: '1:377511395647:web:f27f8885c31ab63705d38a',
  measurementId: 'G-YZR7NDNX86',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
