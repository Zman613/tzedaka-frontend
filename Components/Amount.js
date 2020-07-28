import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Amount = ({amount, click, clicked, idA}) => {
  // console.log(props)
  return (
    <TouchableOpacity style={!!click ? styles.circleClick : styles.circle} onPress={() => clicked(idA, click)}>
      <Text>
        <Text style={styles.text}>${amount}</Text>
      </Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  circle: {
    width: 63,
    height: 63,
    borderRadius: 63/2,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  circleClick: {
    width: 63,
    height: 63,
    borderRadius: 63/2,
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 6,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 57
  },
  textCount: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 14
  },
})

export default Amount