// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3XIUaxhSCe3TBMUEwUeUjbx9GyNIh0fM",
  authDomain: "flutter-ai-playground-700f1.firebaseapp.com",
  projectId: "flutter-ai-playground-700f1",
  storageBucket: "flutter-ai-playground-700f1.firebasestorage.app",
  messagingSenderId: "278687902712",
  appId: "1:278687902712:web:623f1f743128786c38040d",
  measurementId: "G-K8MNMEV14L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  'recaptcha-container',
  {
    size: 'normal',
    callback: () => {
      console.log("Recaptcha Verified");
    }
  }
);
