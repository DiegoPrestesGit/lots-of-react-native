import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ColorizedSquare from "../components/ColorizedSquare";

const ColorScreen = (props) => {
  const [colors, setColors] = useState([""]);

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View>
      <TouchableOpacity>
        <Text
          style={{ textAlign: "center" }}
          onPress={() => {
            setColors([...colors, randomRgb()]);
          }}
        >
          Add a color
        </Text>
      </TouchableOpacity>

      <ColorizedSquare colors={colors} />
    </View>
  );
};

export default ColorScreen;
