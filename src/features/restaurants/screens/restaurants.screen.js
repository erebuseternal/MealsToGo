import React, { useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

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
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      </SearchView>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
