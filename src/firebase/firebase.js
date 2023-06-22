import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwtWtl9kxTT8DC2DYqy2nKQWb2CbbFffQ",
    authDomain: "gexapp-39fed.firebaseapp.com",
    projectId: "gexapp-39fed",
    storageBucket: "gexapp-39fed.appspot.com",
    messagingSenderId: "1018547378651",
    appId: "1:1018547378651:web:ad582c29af952bcbe26ffe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();