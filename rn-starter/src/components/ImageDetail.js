import React from "react"
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>this image has {score} score points</Text>
      <Image source={image}></Image>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ImageDetail
