//import liraries
import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// create a component
const ListItemComponent = ({ title, icon, onpress }) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text>{title}</Text>
        <MaterialCommunityIcons icon={icon}></MaterialCommunityIcons>
      </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default ListItemComponent;
