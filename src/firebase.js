// firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  databaseURL: 'https://ecommerce-1b95c-default-rtdb.firebaseio.com',
  apiKey: 'AIzaSyC7k4OUUIXx7VLOYfMs-RoHG94Xw0dd1hs',
  authDomain: 'ecommerce-1b95c.firebaseapp.com',
  projectId: 'ecommerce-1b95c',
  storageBucket: 'ecommerce-1b95c.firebasestorage.app',
  messagingSenderId: '1007919859901',
  appId: '1:1007919859901:web:5d98e7aaa220dbc64d0fd4',
  measurementId: 'G-088BWM5B3J',
};

if (!firebaseConfig) {
  console.error('Please set up your firebase config in .env file');
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage, RecaptchaVerifier, signInWithPhoneNumber };
