// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpwLcLDcFG-H_Cpm1wqMxIoVt_p32GXOI",
  authDomain: "databaserunthrough.firebaseapp.com",
  projectId: "databaserunthrough",
  storageBucket: "databaserunthrough.appspot.com",
  messagingSenderId: "129975158950",
  appId: "1:129975158950:web:75925fe244e68f8dc30c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
