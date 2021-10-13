import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ComponentsScreen")}
      >
        <Text style={styles.text}>Components</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ListScreen")}
      >
        <Text style={styles.text}>List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ReusableComponentsScreen")}
      >
        <Text style={styles.text}>ReusableComponents</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CounterScreen")}
      >
        <Text style={styles.text}>Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('ColorScreen')}
      >
        <Text style={styles.text}>Random Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
  },
  view: {
    alignContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
