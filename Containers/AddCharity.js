import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'

const AddCharity = ({navigation}) => {

  const [charities, setCharities] = useState([])
 
  useEffect(() => {
    fetch(`http://localhost:3000/charities`)
    .then(resp => resp.json())
    .then(charities => {
      setCharities(charities)
    })
  }, [])

  console.log(charities)

  return (
    <View>
      <Text>Hello</Text>
    </View>
  )

}

const styles = StyleSheet.create({

})

export default AddCharity