// src/app/firebase.config.ts
import { initializeApp } from 'firebase/app';

import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCMvQN0ozFD6BljCCNDtppn2PjJ4_8t4ao",
  authDomain: "mon-projet1-e8137.firebaseapp.com",
  projectId: "mon-projet1-e8137",
  storageBucket: "mon-projet1-e8137.appspot.com",
  messagingSenderId: "468245335574",
  appId: "1:468245335574:web:f5d6da68eed402fc996f37",
  measurementId: "G-MKBVMS1YG9"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // ✅ crée l’instance Firestore


// Analytics uniquement dans le navigateur
let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log('✅ Firebase Analytics initialized');
    } else {
      console.warn('⚠️ Firebase Analytics not supported in this environment.');
    }
  });
}

export { db,app, analytics };
export default app; // Exportation de l'instance Firebase pour une utilisation dans d'autres parties de l'application