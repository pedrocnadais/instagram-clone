import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBZMpBz74bIpNlHkOIVn3n4kFncev3K8k",
  authDomain: "instagram-clone-81b50.firebaseapp.com",
  projectId: "instagram-clone-81b50",
  storageBucket: "instagram-clone-81b50.appspot.com",
  messagingSenderId: "867761466716",
  appId: "1:867761466716:web:e20e5445ee5ac6915e2599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage };