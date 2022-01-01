import React from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};
