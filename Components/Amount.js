import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Amount = ({amount}) => {

  const [count, setCount] = useState(null)

  const addOne = () => {
    count === null ? setCount(1) : setCount(count + 1)
  }
 
  console.log(count)
  return (
    <TouchableOpacity style={styles.circle} onPress={() => addOne()}>
      <Text>
        <Text style={!count ? styles.text : styles.textF}>${amount}</Text>
        <Text style={styles.textCount}>{count && `\nx ${count}`}</Text>
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
    borderColor: '#aaa'
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 57
  },
  textF: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 47
  },
  textCount: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 14
  },
})

export default Amount