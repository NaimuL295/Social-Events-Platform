

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,

  apiKey: "AIzaSyBTKe71qIS_NrY_wrpEyLW3cLYhbBM_p_k",
  authDomain: "social-development-e540c.firebaseapp.com",
  projectId: "social-development-e540c",
  storageBucket: "social-development-e540c.firebasestorage.app",
  messagingSenderId: "285618528994",
  appId: "1:285618528994:web:c052d4fc40232e0904b4bb"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app)




