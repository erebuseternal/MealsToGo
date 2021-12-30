import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar, View, FlatList } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  flex-grow: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchView = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      </SearchView>
      {isLoading && <ActivityIndicator animating color={Colors.red800} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
