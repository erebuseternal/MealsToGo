import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import { colors } from './src/utils/colors';
import { spacing } from './src/utils/spacing';

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
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.green,
    maxHeight: spacing.lg,
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
