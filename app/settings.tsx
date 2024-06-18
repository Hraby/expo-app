import { StatusBar } from 'expo-status-bar';

import {Text, StyleSheet, View, Platform} from 'react-native';
import { Stack} from 'expo-router';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ presentation: "modal" }} />
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator}/>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
