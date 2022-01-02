import React, { useContext, useState } from 'react';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import {
  AccountBackground,
  ButtonArea,
  AuthInput,
  AuthButton,
  ErrorText,
} from '../components/account.components';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <ButtonArea>
        <AuthInput
          textContentType="emailAddress"
          keyboardType="email-address"
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <AuthInput
          textContentType="password"
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <AuthButton onPress={() => onLogin(email, password)}>Login</AuthButton>
        {!!error && <ErrorText>{error}</ErrorText>}
      </ButtonArea>
    </AccountBackground>
  );
}
