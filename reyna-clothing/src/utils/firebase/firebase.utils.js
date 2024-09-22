import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
