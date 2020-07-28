import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Header = ({balance, open}) => {
  console.log(balance)
  return (
    <View style={styles.header}>
      <Icon name='bars' size={25} onPress={() => open()} />
      <Text style={styles.text}>Tzedakah</Text>
      <Text style={styles.textBalance}>
        <Text style={styles.balance}>{`Balance:`}</Text>
        <Text>{`\n$${balance / 100}`}</Text>
      </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 40
    // marginLeft: 'auto',
    // marginRight: 'auto'
  },
  textBalance: {
    lineHeight: 15, 
    textAlign: 'center',
  },
  balance: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500'
  },
  balanceAmount: {
    color: 'black',
    fontSize: 10,
  }
})

export default Header