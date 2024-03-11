import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9hktkcsZ5WCIebakG0nIubXVQe3TfNE8",
    authDomain: "glowtechmor-d6cb0.firebaseapp.com",
    projectId: "glowtechmor-d6cb0",
    storageBucket: "glowtechmor-d6cb0.appspot.com",
    messagingSenderId: "105517231526",
    appId: "1:105517231526:web:5b4da124fa6870bca27367",
    measurementId: "G-FCFFPLK6SX"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

export { db };
export { storage, auth};
// export default app;
export default firebaseConfig;
