import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import config, { firestoreConfig } from './firebaseconfig';

firebase.initializeApp(config);
firebase.firestore().settings(firestoreConfig);

export default firebase;
