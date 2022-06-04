import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyBty9Z1EN3TdGy1rmkEO4WpPlmeh47WHz4',
  authDomain: 'ball-street-20550.firebaseapp.com',
  projectId: 'ball-street-20550',
  storageBucket: 'ball-street-20550.appspot.com',
  messagingSenderId: '231466489097',
  appId: '1:231466489097:web:dabbf0d4ad898ef63f2fd8',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
