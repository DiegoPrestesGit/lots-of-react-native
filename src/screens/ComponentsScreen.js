import React from 'react'
import { Text, View } from 'react-native'

const ComponentsScreen = () => {
  const phrases = {
    greetings: 'I did not hit her, I did not.',
    ending: 'oh, hi Mark'
   }

  return (
    <View>
      <Text style={{ fontSize: 45, fontWeight: 'bold' }}>{phrases.greetings}</Text>
      <Text style={{ fontSize: 22, fontWeight: '200' }} >{phrases.ending}</Text>
    </View>
  )
}

export default ComponentsScreen
