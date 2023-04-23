// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUx0b2B1ienANFiPULiugJVR3KDhZvHXg',
  authDomain: 'marchantes-00.firebaseapp.com',
  projectId: 'marchantes-00',
  storageBucket: 'marchantes-00.appspot.com',
  messagingSenderId: '951446658923',
  appId: '1:951446658923:web:a4924bccb6eeb5f59eb62e',
  measurementId: 'G-MFBKZH7XVP'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);