import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { SafeArea } from '../../restaurants/components/safe-area.components';
import { RestaurantList } from '../../restaurants/screens/restaurants.screen';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.components';

export function FavouritesScreen({ navigation }) {
  const { favourites } = useContext(FavouritesContext);
  console.log(favourites);
  return (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
