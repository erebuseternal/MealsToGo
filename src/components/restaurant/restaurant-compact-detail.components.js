import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, Platform } from 'react-native';
import WebView from 'react-native-webview';

const CompactImage = styled(Image)`
  border-radius: 10px;
  height: 100px;
  width: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  height: 100px;
  width: 100px;
`;

const CompactView = styled(View)`
  max-width: 140px;
  justify-content: center;
  align-items: center;
`;

const CompactName = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
`;

export function RestaurantCompactDetail({ restaurant }) {
  const { photos, name } = restaurant;
  const ImageView = Platform.OS === 'android' ? CompactWebView : CompactImage;
  return (
    <CompactView>
      <ImageView source={{ uri: photos[0] }} />
      <CompactName>{name}</CompactName>
    </CompactView>
  );
}
