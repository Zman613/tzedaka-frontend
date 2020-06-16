import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import HomeScreen from './Containers/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

const App = () => {

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/users/1?_embed=user_charitys`)
    .then(resp => resp.json())
    .then(user => setUser(user))
  }, [])
  console.log(user)

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={styles.container} initialRouteName="Home">
        <Drawer.Screen name="Home"> 
          {props => <HomeScreen {...props} user={user} />}
        </ Drawer.Screen>
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 12,
    width: 200,
    // backgroundColor: 'rgba(255,255,255,0.8)'
  }
})

export default App