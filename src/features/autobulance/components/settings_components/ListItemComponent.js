//import liraries
import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// create a component
const ListItemComponent = ({ title, icon, onpress, colored }) => {
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      <View
        style={{
          margin: 10,
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colored ? "#F2BE22" : "#E5E5E5",
          elevation: 5,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{title}</Text>
        <Icon name={icon} size={25} color={"black"}></Icon>
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
