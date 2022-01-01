import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { Card, Paragraph, Title } from 'react-native-paper';
import { View, Text } from 'react-native';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Favourite } from '../../../components/favourite/favourite.components';

const RestaurantCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[4]};
`;

const RestaurantTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
`;

const RestaurantBody = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
`;

const IconRow = styled(View)`
  align-items: center;
  flex-direction: row;
`;

const Rating = styled(View)`
  flex-direction: row;
  flex: 1;
`;

const TempClosed = styled(Text)`
  padding-right: ${(props) => props.theme.space[2]};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.error};
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Giacomo's",
    icon = null,
    photos = ['https://s3-media0.fl.yelpcdn.com/bphoto/pN5v1d_MhMP1an5I9Tx-8g/o.jpg'],
    vicinity = '431 Columbus Ave, Boston, MA 02116',
    isOpenNow = true,
    rating = 4.3,
    isClosedTemporarily = false,
    placeId = -1,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <RestaurantTitle>{name}</RestaurantTitle>
        <IconRow>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporarily && <TempClosed>Temporarily Closed</TempClosed>}
          {isOpenNow && !isClosedTemporarily && <SvgXml xml={open} width={30} height={30} />}
          {icon && <Icon source={{ uri: icon }} />}
        </IconRow>
        <RestaurantBody>{vicinity}</RestaurantBody>
      </Card.Content>
    </RestaurantCard>
  );
}
