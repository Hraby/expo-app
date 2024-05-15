import {StyleSheet, View, SafeAreaView} from 'react-native';
import {FeatureMatchScreen} from '@/components/FeatureMatch';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FeatureMatchScreen />
      <View style={styles.separator} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
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
