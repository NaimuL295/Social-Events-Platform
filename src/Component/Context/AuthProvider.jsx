import React, { useEffect, useState } from 'react';
import { auth } from './Auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, 
    signInWithEmailAndPassword, signInWithPopup, signOut, 
    updateProfile} from 'firebase/auth';
import { AuthContext } from './AuthContext';
import axios from 'axios';
const googleProvider=new GoogleAuthProvider();;
const AuthProvider = ({ children }) => {
   
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true);

    const  userCreate=(email,password)=>{
        setLoading(true)
return createUserWithEmailAndPassword(auth, email, password);

    }
    const userLogin=(email,password)=>{
return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSign=()=>{
        setLoading(true)
return signInWithPopup(auth, googleProvider)
    }
    const logout=()=>{
   return signOut(auth)
    }
  
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);

    if (currentUser?.email) {
     
      axios.post("http://localhost:3000/jwt",
        { email: currentUser?.email },
        { withCredentials: true }).
        then((result) => {
        console.log("JWT SET:", result.data);
      }).catch((err) => {
        console.error("JWT ERROR:", err);
      });
    }
    setLoading(false);
  });

  return () => unsubscribe();
}, []);



const updateUser=(updata)=>{
    return  updateProfile(auth.currentUser,updata)
  }

    const userInfo={
        user,
        setUser,
        userCreate,
        userLogin,
          googleSign,
       logout,
       loading,
     updateUser
    }
    return (
       <AuthContext value={userInfo}>{ children }  </AuthContext>
    );
};

export default AuthProvider;