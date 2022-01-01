import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground, View } from 'react-native';
import { Button } from 'react-native-paper';

import { colors } from '../../../infrastructure/theme/colors';

export const AccountBackground = styled(ImageBackground).attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonArea = styled(View)`
  background-color: rgba(250, 250, 250, 0.7);
  padding: 15px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: 'contained',
  icon: 'lock-open-outline',
})`
  padding: 10px;
  margin: 10px;
`;
