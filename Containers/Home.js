import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddCharity from './AddCharity';

const Stack = createStackNavigator();

const Home = ({user}) => {
 
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='HomeScreen'>
        {props => <HomeScreen {...props} user={user} />}
      </Stack.Screen>
      <Stack.Screen name='Add Charity'>
        {props => <AddCharity {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  )

}

const styles = StyleSheet.create({
  
})

export default Home