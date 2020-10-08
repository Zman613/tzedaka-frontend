import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const Home = ({user}) => {
 
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='HomeScreen'>
        {props => <HomeScreen {...props} user={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )

}

const styles = StyleSheet.create({
  
})

export default Home