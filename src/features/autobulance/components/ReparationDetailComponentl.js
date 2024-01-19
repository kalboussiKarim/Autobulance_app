//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const ReparationDetail = ({ service }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{service.name}</Text>
      <Text style={styles.textStyle}>{service.price} DT</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 0,
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
});

//make this component available to the app
export default ReparationDetail;
