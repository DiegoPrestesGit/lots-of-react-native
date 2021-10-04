import React from "react";
import { View, StyleSheet } from "react-native";

const ColorizedSquare = ({ colors, ...props }) => {
  return <View style={styles.square} />;
};

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    backgroundColor: colors[colors.length - 1],
  },
});

export default ColorizedSquare;
