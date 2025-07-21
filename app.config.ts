// firebaseconfig.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: 'AIzaSyCMvQN0ozFD6BljCCNDtppn2PjJ4_8t4ao',
  authDomain: 'mon-projet1-e8137.firebaseapp.com',
  projectId: 'mon-projet1-e8137',
  storageBucket: 'mon-projet1-e8137.appspot.com',
  messagingSenderId: '468245335574',
  appId: '1:468245335574:web:f5d6da68eed402fc996f37',
  measurementId: 'G-MKBVMS1YG9'
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideAnimationsAsync()
  ]
};
