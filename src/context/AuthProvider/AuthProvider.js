import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  // create a new user 
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
  }

  // login a existing user 
  const logInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }

  // sign out user 
  const signOutUser = () => {
    return signOut(auth)
  }

  // update a user 
  const updateUser = userInfo => {
    return updateProfile(auth.currentUser,userInfo)
  }

  // observe 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
    })

    return () => {
      return unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    signOutUser,
    updateUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;