import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const CounterScreen = () => {
  let counter = 0

  return (
    <View>
      <TouchableOpacity onPress={() => counter++}>
        <Text style={styles.textStyle}>increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => counter >= 0 ? counter-- : counter}>
        <Text style={styles.textStyle}>decrease</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle2}>counter</Text>
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
    ...textStyle,
    
  }
})

export default CounterScreen
