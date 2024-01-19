//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { theme } from "../utils/theme";

// create a component
const ActivityIndicatorComponent = () => {
  return <ActivityIndicator size="small" color={theme.colors.bg.green} />;
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
export default ActivityIndicatorComponent;
