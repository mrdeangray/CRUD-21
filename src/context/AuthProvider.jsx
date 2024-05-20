import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setCurrUser(u));
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
