import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4oJwZ2M2dldcJoWW0iEQV7Yz1Jt5M8S0",
    authDomain: "reyna-clothing-db.firebaseapp.com",
    projectId: "reyna-clothing-db",
    storageBucket: "reyna-clothing-db.appspot.com",
    messagingSenderId: "487415479919",
    appId: "1:487415479919:web:b5b2e35f161441f99f979a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const providerFromGoogle = new GoogleAuthProvider();
providerFromGoogle.addScope('profile');
providerFromGoogle.addScope('email');
providerFromGoogle.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, providerFromGoogle);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, providerFromGoogle);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    // check if data not exists
    if (!userSnapshot.exists()) {
        // create / set data from userAuth to collection
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log('error creating user data: ', error.message)
        }
    }

    return userDocRef;
}