import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import { colors } from './src/utils/colors.js';
import { spacing } from './src/utils/spacing.js';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.searchContainer}>
          <Text>search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar></ExpoStatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.green,
    maxHeight: spacing.lg,
    justifyContent: "center",
    padding: spacing.sm
  },
  listContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.blue,
    padding: spacing.sm
  }
});
