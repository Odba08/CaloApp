import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingScreen = () => {
const load = () => {
  
}

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="midnightblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default LoadingScreen;
