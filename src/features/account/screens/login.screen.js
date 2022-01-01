import React from 'react';
import { View, Text } from 'react-native';

import { AccountBackground } from '../components/account.components';

export function LoginScreen() {
  return (
    <AccountBackground>
      <Text>Please log in.</Text>
    </AccountBackground>
  );
}
