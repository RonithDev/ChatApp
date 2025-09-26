import { getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyATWcpMbTXIlTokiycklNYyoS8667xJHPE",
    authDomain: "chat-app-prayse.firebaseapp.com",
    projectId: "chat-app-prayse",
    storageBucket: "chat-app-prayse.firebasestorage.app",
    messagingSenderId: "503914549983",
    appId: "1:503914549983:web:c166114b8d9c435b540f6a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);