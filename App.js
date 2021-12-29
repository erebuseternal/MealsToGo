import { useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { colors } from './src/utils/colors';
import { spacing } from './src/utils/spacing';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={{ flex: 1, flexGrow: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.searchContainer}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'center',
    padding: spacing.sm,
  },
  listContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.blue,
    padding: spacing.sm,
  },
});
