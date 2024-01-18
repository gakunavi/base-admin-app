import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { CONFIG } from '../config/constant';

if (!firebase.apps.length) {
  firebase.initializeApp(CONFIG.firebase);
}

export default firebase;
