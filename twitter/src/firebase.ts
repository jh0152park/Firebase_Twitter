import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBL6DPzoM8yX39OZoRDETseO1ICw0xdQFg",
    authDomain: "twitter-reloaded-c0cb2.firebaseapp.com",
    projectId: "twitter-reloaded-c0cb2",
    storageBucket: "twitter-reloaded-c0cb2.appspot.com",
    messagingSenderId: "266016455916",
    appId: "1:266016455916:web:78de9ea561cfca73fbf9c9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
