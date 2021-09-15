import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <TouchableOpacity onPress={() => setCounter(counter+1)}>
        <Text style={styles.textStyle}>increase</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {if(counter > 0) setCounter(counter-1)}}>
        <Text style={styles.textStyle}>decrease</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle2}>counter: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    marginHorizontal: 5,
    fontSize: 25
  },
  textStyle2: {
    marginVertical: 10,
    marginHorizontal: 5,
    fontSize: 20
  }
})

export default CounterScreen
