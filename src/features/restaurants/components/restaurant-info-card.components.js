import React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';

export function RestaurantInfoCard(restaurant = {}) {
  const {
    name = "Giacomo's",
    icon,
    photos = ['https://s3-media0.fl.yelpcdn.com/bphoto/pN5v1d_MhMP1an5I9Tx-8g/o.jpg'],
    address = '431 Columbus Ave, Boston, MA 02116',
    isOpenNow = true,
    rating = 4.3,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
}
