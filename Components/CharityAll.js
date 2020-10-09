import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CharityAll = ({photo_url, name, id}) => {
 
  return (
    <View style={styles.charityView}>
      <TouchableOpacity style={styles.charity}>

      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  charityView: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 15,
    margin: 7,
  },
  charity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 15
  },
})

export default CharityAll