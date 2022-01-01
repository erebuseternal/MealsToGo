import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

import { AccountBackground, ButtonArea, AuthButton } from '../components/account.components';

export function AccountScreen({ navigation }) {
  return (
    <AccountBackground>
      <ButtonArea>
        <AuthButton onPress={() => navigation.navigate('Login')}>Login</AuthButton>
        <AuthButton onPress={() => navigation.navigate('Register')}>Register</AuthButton>
      </ButtonArea>
    </AccountBackground>
  );
}
