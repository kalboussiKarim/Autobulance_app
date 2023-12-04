//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

// create a component
const SettingButton = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          margin: 20,
          padding: 5,
          alignSelf: "center",
          borderRadius: 10,
          width: "35%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#22A699",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          {title}
        </Text>
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
export default SettingButton;
