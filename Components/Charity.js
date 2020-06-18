import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Amount from './Amount'

const defaultAmounts = [
  {amount: 0.18},
  {amount: 0.36},
  {amount: 1},
  {amount: 5}
]

const Charity = ({photo_url, name, id}) => {
 
  const [amounts, setAmount] = useState(defaultAmounts)

  return (
    <View style={styles.charityView}>
      <TouchableOpacity style={styles.charity}>
        <View style={styles.charityTitle}>
        {/* defaultSource={{uri: ''}} */}
          <Image source={{uri: photo_url}} style={styles.image} />
          <Text style={styles.title}>
            <Text style={styles.name}>{name}</Text>
            <Text>{`\nToday:`}</Text>
          </Text>
        </View>
        <View style={styles.charityTitle}>
          <Icon name='chevron-right' />
        </View>
      </TouchableOpacity>
      <View style={styles.amount}>
        {amounts && amounts.map((a, i) => <Amount key={i} amount={a.amount} id={id}  />)}
        <TouchableOpacity style={styles.circle}>
          <Text style={styles.text}>Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  charityView: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  charity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 15
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
    paddingLeft: 6,
    lineHeight: 25
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  amount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 5
  },
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
  }
})

export default Charity