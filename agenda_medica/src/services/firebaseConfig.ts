import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0FkDMidaT9NxRsddFeq46QfnDfQAKtlc",
  authDomain: "trab-disp-moveis-510c6.firebaseapp.com",
  projectId: "trab-disp-moveis-510c6",
  storageBucket: "trab-disp-moveis-510c6.firebasestorage.app",
  messagingSenderId: "853021648188",
  appId: "1:853021648188:web:44267530e31ec959a72a39",
  measurementId: "G-4W6MK0YRPL"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)