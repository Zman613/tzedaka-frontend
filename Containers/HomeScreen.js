import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Charity from '../Components/Charity'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const HomeScreen = ({user, navigation}) => {

  const [charities, setCharities] = useState([])
  const [prices, setPrices] = useState([])
  
  useEffect(() => {
    setCharities(user.charities)
  }, [user.charities])

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
      {<FlatList data={charities} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <Charity {...item} priceHandler={priceHandler} />} />}
      <View style={styles.viewCircle}>
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Add Charity')}>
          <Icon name='plus' style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 60,
    },
    viewCircle: {
      justifyContent: 'flex-end', 
      alignItems: 'flex-end', 
      zIndex: 2, 
      position: 'absolute', 
      right: '5%', 
      top: '89%', 
      elevation: 2,
    },
    circle: {
      width: 67,
      height: 67,
      borderRadius: 67/2,
      borderWidth: 1,
      borderColor: 'black',
      marginRight: 20,
      marginBottom: 20,
      backgroundColor: 'white',
      opacity: 0.8,
    },
    icon: {
      textAlign: 'center',
      fontSize: 30,
      lineHeight: 65
    },
})

export default HomeScreen