import React from 'react';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export const loginRequest = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logoutRequest = () => {
  const auth = getAuth();
  return signOut(auth);
};

export const checkAuth = (setUser) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (usr) => {
    if (usr != null) {
      setUser(usr);
    }
  });
};
