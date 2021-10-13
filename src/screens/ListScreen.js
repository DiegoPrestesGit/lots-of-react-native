import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const nameArr = [
    { name: "John", age: 20, key2: "1" },
    { name: "Wick", age: 30, key2: "2" },
    { name: "Baba", age: 25, key2: "3" },
    { name: "Yaga", age: 26, key2: "4" },
    { name: "Yaga", age: 23, key2: "5" },
    { name: "Yaga", age: 14, key2: "64" },
    { name: "Yaga", age: 63, key2: "74" },
    { name: "Yaga", age: 10, key2: "84" },
    { name: "Yaga", age: 3, key2: "94" },
    { name: "Yaga", age: 54, key2: "34" },
  ];

  const renderNames = ({ item }) => {
    return (
      <Text style={styles.textStyle}>
        {item.name} has {item.age} years old
      </Text>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.key2}
      data={nameArr}
      renderItem={renderNames}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 5,
  },
});

export default ListScreen;
