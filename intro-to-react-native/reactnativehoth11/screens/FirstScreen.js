import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Post from '../Post'

export default function FirstScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Post name="Jakob" major='Art'></Post>
      <Button title='click me to go to 2nd screen'
      onPress={()=>navigation.navigate('SecondScreen')}
      />
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
