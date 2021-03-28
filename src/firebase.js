import firebase from 'firebase'
import {FIREBASE_CONSTANTS} from "./consts"
const firebaseConfig = {
  apiKey: FIREBASE_CONSTANTS.apiKey,
  authDomain: FIREBASE_CONSTANTS.authDomain,
  projectId: FIREBASE_CONSTANTS.projectId,
  storageBucket: FIREBASE_CONSTANTS.storageBucket,
  messagingSenderId: FIREBASE_CONSTANTS.messagingSenderId,
  appId:  FIREBASE_CONSTANTS.appId
};

firebase.initializeApp(firebaseConfig)