import firebase from '../firebase';
import 'firebase/firestore';

const db = firebase.firestore();
const storage = firebase.storage().ref();

export { db, storage };
