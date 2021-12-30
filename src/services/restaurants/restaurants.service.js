import camelize from 'camelize';
import { mocks, mockImages } from './mock';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') =>
  new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = camelize(results).map((restaurant) => ({
    ...restaurant,
    isOpenNow: restaurant.openingHours && restaurant.openingHours.openNow,
    isClosedTemporarily: restaurant.businessStatus === 'CLOSED_TEMPORARILY',
    photos: [mockImages[Math.floor(Math.random() * mockImages.length)]],
  }));
  return mappedResults;
};
