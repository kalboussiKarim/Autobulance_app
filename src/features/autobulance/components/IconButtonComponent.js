//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

// create a component
const IconButtonComponent = ({ icon, onPress, props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      // style={{
      //   height: 48,
      //   width: "42%",
      //   borderRadius: 27,
      //   justifyContent: "center",

      //   alignItems: "center",
      //   elevation: 10,

      //   ...props,
      // }}
    >
      <FontAwesome name={icon} style={[{ fontSize: 25, color: "black" }]} />
    </TouchableOpacity>
  );
};

export default IconButtonComponent;
