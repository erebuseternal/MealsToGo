/* eslint-disable react/no-unstable-nested-components */
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaView, Text } from 'react-native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text>Settings will be in here</Text>
    </SafeAreaView>
  );
}

function MapScreen() {
  return (
    <SafeAreaView>
      <Text>Map will be in here</Text>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Restaurants') {
                    iconName = focused ? 'fast-food' : 'fast-food-outline';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                  } else if (route.name === 'Map') {
                    iconName = focused ? 'map' : 'map-outline';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
