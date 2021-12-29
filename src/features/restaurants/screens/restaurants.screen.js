import React, { useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  flex-grow: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchView = styled(View)`
  justify-content: center;
  padding: 10px;
`;

const ListView = styled(View)`
  flex: 1;
  flex-grow: 1;
  background-color: #e0e0e0;
  padding: 10px;
`;

export function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </SafeArea>
  );
}
