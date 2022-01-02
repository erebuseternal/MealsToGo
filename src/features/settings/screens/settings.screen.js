import React, { useContext } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const Email = styled(Text)`
  margin: 16px;
`;

export function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeAreaView>
      <Email>{user.email}</Email>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
}
