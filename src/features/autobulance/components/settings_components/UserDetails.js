//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utilities/theme/colors";

// create a component
const UserDetails = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 30,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          backgroundColor: colors.bg.green,
          borderRadius: 180,
          height: 60,
          width: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
          A
        </Text>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
        <Text style={styles.text}>abir karim </Text>
        <Text>abir@gmail.com </Text>
      </View>
    </View>
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
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
});

//make this component available to the app
export default UserDetails;
