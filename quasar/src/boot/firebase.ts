import { firebaseInit } from '@gcto/firebase-hooks/lib';
import { boot } from 'quasar/wrappers';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyD-jpBuDS62JRCG4ToXQBL-waNsHddHmJM',
  authDomain: 'ballstreetdao.firebaseapp.com',
  projectId: 'ballstreetdao',
  storageBucket: 'ballstreetdao.appspot.com',
  messagingSenderId: '1064898355267',
  appId: '1:1064898355267:web:882c16b380014e8ffe34f6',
};
// Initialize Firebase
export default boot(() => {
  firebaseInit(firebaseConfig);
});
