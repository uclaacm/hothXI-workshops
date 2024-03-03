import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Post from '../Post'

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Post name="Jakob" major='Art'></Post>
      <Post name="Max" major='CS'></Post>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
    backgroundColor: 'yellow',
  },
  pics: {
    flexDirection: 'row',
  },
});
