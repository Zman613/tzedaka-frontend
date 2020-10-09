import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import Icon from 'react-native-vector-icons/dist/EvilIcons'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const CharityAll = ({photo_url, name, id}) => {
 
  return (
    <View style={styles.charityView}>
      <View style={styles.charity}>
        <TouchableOpacity style={styles.charityTitle}>
          <Image source={{uri: photo_url}} style={styles.image} />
          <Text style={styles.title}>
            <Text style={styles.name}>{name}</Text>
            {/* <Text>{`\nToday:`}</Text> */}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.charityTitle}>
          <Icon name='heart' style={styles.iconUnder} />
          <Icon name='heart' style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  charityView: {
    padding: 15,
    paddingHorizontal: 5,
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
    margin: 15
  },
  charityTitle: {
    flexDirection: "row",
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 50,
    resizeMode: 'contain',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 8
  },
  title: {
    paddingLeft: 8,
    lineHeight: 25
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconUnder: {
    fontSize: 22,
    color: 'black',
    // fill: 'black'
    // backgroundColor: 'green',
    // opacity: 10,
    // textShadowColor: 'darkgreen',
    // textShadowRadius: 3,
    // textShadowOffset: {width: 0, height: 0}
  },
  icon: {
    fontSize: 14,
    top: 4,
    left: 4,
    position: "absolute",
    color: 'white',
  },
  iconFilled: {
    fontSize: 14,
    top: 4,
    left: 4,
    position: "absolute",
    color: 'pink',
  }
})

export default CharityAll