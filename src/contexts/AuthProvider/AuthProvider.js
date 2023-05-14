import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/Firebase.config.js";

const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Tamanna" });
  const [loading, setLoading] = useState(true);

  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const GitHubProvider = new GithubAuthProvider();

  const loginWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, GoogleProvider);
  };
  const facebookLogin=()=>{
    setLoading(true);

    return signInWithPopup(auth, FacebookProvider);

}
  const logInWithGitHub = () => {
    setLoading(true);

    return signInWithPopup(auth, GitHubProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile=(profile)=>{
  return updateProfile(auth.currentUser, profile);
  }
;
const verifyEmail=()=>{
    return sendEmailVerification(auth.currentUser);
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    loginWithGoogle,
    logOut,
    verifyEmail,
    createUser,
    login,
    logInWithGitHub,
    updateUserProfile,
    facebookLogin
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
