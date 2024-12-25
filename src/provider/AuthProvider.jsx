import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import { app } from '../firebase/firebase.config';
import AuthContext from './AuthContex';

const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const provider = new GoogleAuthProvider();
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true);
   const createUserData = (email,password)=>{
       setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
   }
   const logOut = ()=>{
       setLoading(true);
       return signOut(auth);
   }
   const logIn = (email,password)=>{
       setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
   }

   const updateProfileUser = (updateData)=>{
       return updateProfile(auth.currentUser,updateData)
   }
   
   const logInGoogle = ()=>{
       return signInWithPopup(auth,provider)
   }
   const forgotEmail = (email)=>{
       return sendPasswordResetEmail(auth,email);
   }
  
   const authInfo ={
       user,
       setUser,
       createUserData,
       logOut,
       logIn,
       loading,
       updateProfileUser,
       logInGoogle,
       forgotEmail
       
   };
   useEffect(()=>{
       const unSubsCribe = onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser);
           setLoading(false);
       });
       return ()=>{
           unSubsCribe();
       }
   },[])
   return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
   );
};

export default AuthProvider;