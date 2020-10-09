import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CharityAll from '../Components/CharityAll'

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
    <View style={styles.container}>
      <FlatList data={charities} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <CharityAll {...item} /> } />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
})

export default AddCharity