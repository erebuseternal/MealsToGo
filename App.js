import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { initializeApp } from 'firebase/app';

import { theme } from './src/infrastructure/theme';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { Navigation } from './src/infrastructure/navigation/index';

const firebaseConfig = {
  apiKey: 'AIzaSyD54FxMLxDTB9Lth2RlWe_hKxVtHPJtClY',
  authDomain: 'mealstogo-9f791.firebaseapp.com',
  projectId: 'mealstogo-9f791',
  storageBucket: 'mealstogo-9f791.appspot.com',
  messagingSenderId: '637174418875',
  appId: '1:637174418875:web:cc8127e9344b656147c89e',
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
