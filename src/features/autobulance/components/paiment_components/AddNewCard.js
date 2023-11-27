//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Inputfield } from "../../../../components/inputField/Inputfield";

// create a component
const AddNewCard = () => {
  const [inputs, setInputs] = useState({ name: "", num: "" });
  const [errors, setErrors] = useState({ name: "", num: "" });
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (err, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: err }));
  };
  return (
    <View style={{ marginTop: 30, marginBottom: 10 }}>
      <Text style={styles.labels}>Card number </Text>
      <Inputfield
        label={"Card number "}
        onChangeText={(text) => handleOnchange(text, "num")}
        onFocus={() => handleError(null, "num")}
        error={errors.num}
        password
      />
      <Text style={styles.labels}>Card'Holder's Name </Text>
      <Inputfield
        iconName="card-bulleted"
        label={"Card name"}
        onChangeText={(text) => handleOnchange(text, "name")}
        onFocus={() => handleError(null, "name")}
        error={errors.name}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  labels: {
    marginHorizontal: 3,
    marginLeft: 25,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default AddNewCard;
