import firebase from 'firebase/compat/'
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  collectionGroup,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1mFUqbxDRYpNulNJcio4_8Ez1Va4Xxb4',
  authDomain: 'rn-intagram-clone.firebaseapp.com',
  projectId: 'rn-intagram-clone',
  storageBucket: 'rn-intagram-clone.appspot.com',
  messagingSenderId: '97946147016',
  appId: '1:97946147016:web:039d24cc2a2ca2f466edfd',
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db,
getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  collectionGroup,
  arrayUnion,
  arrayRemove,
  updateDoc,}
