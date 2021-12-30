import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar, FlatList } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  flex-grow: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export function RestaurantsScreen() {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && <ActivityIndicator animating color={Colors.red800} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
