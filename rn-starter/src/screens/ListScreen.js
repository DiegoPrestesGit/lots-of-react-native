import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
  const nameArr = [
    { name: 'John', key2: '1' },
    { name: 'Wick', key2: '2' },
    { name: 'Baba', key2: '3' },
    { name: 'Yaga', key2: '4' },
  ]

  const renderNames = ({ item }) => {
    return <Text>{item.name}</Text>
  }

  return (
    <FlatList
      keyExtractor={ item => item.key2 }
      data={nameArr}
      renderItem={renderNames}
    />
  )
}

const styles = StyleSheet.create({

})

export default ListScreen
