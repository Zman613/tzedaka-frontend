import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

const Charity = ({photo_url, name}) => {
 
  console.log({photo_url})
  return (
    <TouchableOpacity style={styles.charity}>
      <View style={styles.charityView}>
        <Image source={{uri: photo_url}} style={styles.image} />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  charity: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  charityView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
  }
})

export default Charity