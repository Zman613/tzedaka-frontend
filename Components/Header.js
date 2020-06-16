import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Header = ({balance, open}) => {
  console.log(balance)
  return (
    <View style={styles.header}>
      <Icon name='bars' size={25} onPress={() => open()} />
      <Text style={styles.text}>Tzedakah</Text>
      <Text style={styles.balance}>{`Balance:\n$${balance}`}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center'
  },
  balance: {
    color: 'black',
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 15
  }
})

export default Header