import React from "react"
import { View, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'
import forestImage from '../../assets/forest.jpg'
import rainImage from '../../assets/rain.jpeg'
import yugiohImage from '../../assets/yugioh.jpg'

const ReusableComponentsScreen = () => {
  return (
    <View>
      <ImageDetail score={333} title="Forest" image={forestImage}/>
      <ImageDetail score={69} title="Rain"image={rainImage}/>
      <ImageDetail score={666} title="Rock Concert" image={yugiohImage}/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ReusableComponentsScreen
