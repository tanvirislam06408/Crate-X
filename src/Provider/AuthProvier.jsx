import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvier = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,SetLoading]=useState(true);
    console.log(user);
    
    const providerGoogle = new GoogleAuthProvider();

    const createUserWithEmail = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle=()=>{
        signInWithPopup(auth,providerGoogle)
    }
    const signInWithpassword = (email, password) => {
         SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
      return  signOut(auth);
    }
    const updatedData=(details)=>{
       return updateProfile(auth.currentUser,details)
    }


    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            SetLoading(false);
        })
        return () => {
            unSub();
        }
    }, [])
    const authData = {
        createUserWithEmail,
        signInWithpassword,
        user,
        setUser,
        logOut,
        loading,
        SetLoading,
        updatedData,
        signInGoogle
    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvier;