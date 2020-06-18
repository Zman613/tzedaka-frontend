import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Footer = () => {
 
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Donate</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    padding: 15,
    backgroundColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center'
  },
})

export default Footer