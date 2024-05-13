// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyDyRJXgkjGz7Mi5CT5ToBnSSBLWstRBeZs",
  authDomain: "csquickship-422809.firebaseapp.com",
  projectId: "csquickship-422809",
  storageBucket: "csquickship-422809.appspot.com",
  messagingSenderId: "271819893089",
  appId: "1:271819893089:web:52097d16fafe4f2f66bd20",
  measurementId: "G-Q8GKM9DX46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);