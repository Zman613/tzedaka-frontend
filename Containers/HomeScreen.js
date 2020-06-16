import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Charity from '../Components/Charity'
import Header from '../Components/Header'


const HomeScreen = ({user, navigation}) => {

  const [charities, setCharities] = useState([])
  
  const openDraw = () => {
    navigation.openDrawer()
  }

  console.log(user)
  useEffect(() => {
    fetch(`http://localhost:3000/charitys`)
    .then(resp => resp.json())
    .then(charities => setCharities(charities))
  }, [])
  return (
    <View style={styles.container}>
      <Header balance={user.balance} open={openDraw} />
      {!!charities && <FlatList data={charities} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <Charity {...item} />} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 60
    }
})

export default HomeScreen