import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useState} from 'react';

export default function Post({name, image, major}) {
    const [likes, setLikes] = useState(10);
  return (
    <View style={styles.container}>

      <Text style={styles.textStyle}>Hello I'm {name}</Text>
      <Text style={styles.textStyle}>My major is {major}</Text>

      <View style={styles.likes}>
            <TouchableOpacity 
                onPress={()=> setLikes(likes + 5)}
            >
              <Ionicons
                name={true ? 'heart' : 'heart-outline'}
                size={50}
                color={true ? 'red' : 'grey'}
              />
            </TouchableOpacity>
			<Text style={styles.likesText}> {likes} likes</Text>
		</View>

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
  likes: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginBottom: 30
  },
    likesText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
   },
});
