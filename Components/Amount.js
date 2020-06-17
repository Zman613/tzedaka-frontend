import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Amount = ({amount}) => {
 
  return (
    <TouchableOpacity style={styles.circle}>
      <Text style={styles.text}>${amount}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    borderWidth: 1,
    borderColor: '#aaa'
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 53
  }
})

export default Amount