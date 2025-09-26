import { getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "ADD YOUR OWN CREDS",
    authDomain: "ADD YOUR OWN CREDS",
    projectId: "ADD YOUR OWN CREDS",
    storageBucket: "ADD YOUR OWN CREDS",
    messagingSenderId: "ADD YOUR OWN CREDS",
    appId: "ADD YOUR OWN CREDS"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
