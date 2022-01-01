import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favourites');
      if (jsonValue !== null) {
        const value = JSON.parse(jsonValue);
        setFavourites(value);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (favourites.length) {
      saveFavourites(favourites);
    }
  }, [favourites]);

  useEffect(() => {
    loadFavourites();
  }, []);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
