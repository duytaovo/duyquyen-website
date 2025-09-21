// firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  databaseURL:
    'https://duyhao-blog-default-rtdb.asia-southeast1.firebasedatabase.app/',
  apiKey: 'AIzaSyD_hXcWQeIhZR2TH0CJMNNOH5Zx8FuYfUM',
  authDomain: 'duyhao-blog.firebaseapp.com',
  projectId: 'duyhao-blog',
  storageBucket: 'duyhao-blog.appspot.com',
  messagingSenderId: '357850292148',
  appId: '1:357850292148:web:310a86edb96b13c2131ce1',
  measurementId: 'G-HJJH',
};

if (!firebaseConfig) {
  console.error('Please set up your firebase config in .env file');
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage, RecaptchaVerifier, signInWithPhoneNumber };
