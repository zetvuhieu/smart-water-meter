// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA-c8pNtQGmcK9Yz5AAa5PTvQ2jFhyp8pI',
    authDomain: 'sw2023-e9029.firebaseapp.com',
    databaseURL: 'https://sw2023-e9029-default-rtdb.firebaseio.com',
    projectId: 'sw2023-e9029',
    storageBucket: 'sw2023-e9029.appspot.com',
    messagingSenderId: '131432441665',
    appId: '1:131432441665:web:60ab358a50f8736dec23c0',
    measurementId: 'G-Q2BB8LZ2KM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
