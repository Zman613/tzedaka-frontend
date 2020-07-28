import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Charity from '../Components/Charity'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const HomeScreen = ({user, navigation}) => {

  const [charities, setCharities] = useState(user.charities)
  const [prices, setPrices] = useState([])
  
  const openDraw = () => {
    navigation.openDrawer()
  }

  console.log(prices)

  const priceHandler = (id, amount) => {
    setPrices((prevState) => {
      [...prevState, {id, amount}]
    })
  }
  
  return (
    <View style={styles.container}>
      <Header balance={user.balance} open={openDraw} />
      {!!charities && <FlatList data={charities} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <Charity {...item} priceHandler={priceHandler} />} />}
      <Footer />
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