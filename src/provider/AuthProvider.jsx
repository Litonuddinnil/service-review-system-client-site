import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import { app } from '../firebase/firebase.config';
import AuthContext from './AuthContex';
import axios from 'axios';

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
    setLoading(true);
       return updateProfile(auth.currentUser,updateData)
   }
   
   const logInGoogle = ()=>{
    setLoading(true);
       return signInWithPopup(auth,provider)
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
       
   };
   useEffect(()=>{
       const unSubsCribe = onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser);
           
           if(currentUser?.email){
            const user = {email : currentUser.email};
            axios.post("https://service-review-system-server-site.vercel.app/jwt",user,{withCredentials:true})
            .then(res =>{
                console.log(res.data);
                setLoading(false);
            })
           }
           else{
            axios.post("https://service-review-system-server-site.vercel.app/logOut",{},{withCredentials:true})
            .then(res =>{
                console.log(res.data);
                setLoading(false);
            })
           }
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