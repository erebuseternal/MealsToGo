import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

import { AccountBackground, ButtonArea, AuthButton } from '../components/account.components';

const AnimationWrapper = styled(View)`
  width: 100%;
  height: 40%;
`;

export function AccountScreen({ navigation }) {
  return (
    <AccountBackground>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <ButtonArea>
        <AuthButton onPress={() => navigation.navigate('Login')}>Login</AuthButton>
        <AuthButton onPress={() => navigation.navigate('Register')}>Register</AuthButton>
      </ButtonArea>
    </AccountBackground>
  );
}
