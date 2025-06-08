import React, { useEffect, useState } from 'react';
import { auth } from './Auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, 
    signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
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
//     const Profile=()=>{

// // return const user = auth.currentUser;
//     }
useEffect(()=>{
 const sub= onAuthStateChanged(auth,currentUser => {

 setUser(currentUser)
 

if (user?.email) {
 axios.post("http://localhost:3000/jwt" ,
  {
    email:currentUser?.email,
  },
  {
    withCredentials: true 
  }
).then((result) => {
    console.log(result.data);
    
}).catch((err) => {
  console.log(err);
    
});
}
    setLoading(false)
});
return ()=>{
    sub()
}
},[])
    const userInfo={
        user,
        setUser,
        userCreate,
        userLogin,
          googleSign,
       logout,
       loading
    }
    return (
       <AuthContext value={userInfo}>{ children }  </AuthContext>
    );
};

export default AuthProvider;