import {StyleSheet, View, SafeAreaView} from 'react-native';
import {FeatureMatchScreen} from '@/components/FeatureMatch';
import FavoriteMatches from '../../components/FavoriteMatches';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FeatureMatchScreen />
      <FavoriteMatches />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
