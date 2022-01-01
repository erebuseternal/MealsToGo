import React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantCompactDetail } from '../restaurant/restaurant-compact-detail.components';

const FavouritesWrapper = styled(View)`
  padding: 10px;
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
`;

export function FavouritesBar({ favourites, onDetail }) {
  return (
    <FavouritesWrapper>
      <Title>Favourites</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <TouchableOpacity key={key} onPress={() => onDetail(restaurant)}>
              <RestaurantCompactDetail restaurant={restaurant} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
}
