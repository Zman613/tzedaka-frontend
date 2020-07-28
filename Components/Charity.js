import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Amount from './Amount'

const defaultAmounts = [
  {id: 1, amount: 0.18, clicked: false},
  {id: 2, amount: 0.36, clicked: false},
  {id: 3, amount: 1, clicked: false},
  {id: 4, amount: 5, clicked: false}
]

const Charity = ({photo_url, name, id}) => {
 
  const [amounts, setAmount] = useState(defaultAmounts)

  const clicked = (id, clicked) => {
    console.log(id)
    if (clicked) {
      setAmount(amounts.map(a => { 
        if (a.id === id) {
          return {...a, clicked: false}
        }
        return a
      }))
    } else {
      let m = amounts.map(a => {
        if (a.id === id) {
          return {...a, clicked: true}
        } else {
          return {...a, clicked: false}
        }
      })
      setAmount(m)
    }
  }

  console.log(amounts)
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
        {amounts && amounts.map((a, i) => <Amount key={i} amount={a.amount} id={id} clicked={clicked} click={a.clicked} idA={a.id}  />)}
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
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 15,
    margin: 7
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
    padding: 5,
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