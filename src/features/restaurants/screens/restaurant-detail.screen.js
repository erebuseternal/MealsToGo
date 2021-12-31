import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import { SafeArea } from '../components/safe-area.components';
import { Menu } from '../components/restaurant-menu.components';

export const MarginedSafeArea = styled(SafeArea)`
  margin: 10px;
`;

export function RestaurantDetailScreen({ route }) {
  return (
    <MarginedSafeArea>
      <RestaurantInfoCard restaurant={route.params.restaurant} />
      <ScrollView>
        <Menu />
      </ScrollView>
    </MarginedSafeArea>
  );
}
