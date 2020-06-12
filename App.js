import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Charity from './Components/Charity'

const App = () => {

  const [charities, setCharities] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    // fetch(`http://localhost:3000/users/1?_embed=user_charitys`)
    // .then(resp => resp.json())
    // .then(user => setUser(user))
    fetch(`http://localhost:3000/charitys`)
    .then(resp => resp.json())
    .then(charities => setCharities(charities))
  }, [])

  console.log(charities)

  return (
    <View style={styles.container}>
      {!!charities && <FlatList data={charities} renderItem={({ item }) => <Charity {...item} />} />}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App