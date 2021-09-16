import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const ColorScreen = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Add a color</Text>
      </TouchableOpacity>

      <View style={styles.square}></View>
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(0, 255, 0)'
  }
})

export default ColorScreen