import { config } from "./config";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp(config);

// export const auth = firebase.auth();

// export const fireauth = firebase.auth;

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();

export const firebasestore = firebase.firestore;
