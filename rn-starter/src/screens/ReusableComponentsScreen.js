import React from "react"
import { View, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'
import forestImage from '../../assets/forest.jpg'
import rainImage from '../../assets/rain.jpeg'
import yugiohImage from '../../assets/yugioh.jpg'


const ReusableComponentsScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" image={forestImage}/>
      <ImageDetail title="Rain"image={rainImage}/>
      <ImageDetail title="Rock Concert" image={yugiohImage}/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ReusableComponentsScreen
