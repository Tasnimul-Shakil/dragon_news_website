// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOAIma75wdPxidSyRu5qmy9W9xklAkRfs",
  authDomain: "dragon-news-website-ff07a.firebaseapp.com",
  projectId: "dragon-news-website-ff07a",
  storageBucket: "dragon-news-website-ff07a.appspot.com",
  messagingSenderId: "886863307792",
  appId: "1:886863307792:web:525209d9a3547fe2919695"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;