//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../../utils/theme/colors";
import { Inputfield } from "../../../../components/inputField/Inputfield";
import SettingButton from "./SettingButton";

// create a component
const ChangePassword = () => {
  const [inputs, setInputs] = React.useState({
    password: "",
    newPass: "",
    confirmPass: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <View style={styles.container}>
      <Inputfield
        onChangeText={(text) => handleOnchange(text, "password")}
        onFocus={() => handleError(null, "password")}
        label="Enter your password"
        error={errors.password}
        iconName="account-outline"
      />
      <Inputfield
        onChangeText={(text) => handleOnchange(text, "newPass")}
        onFocus={() => handleError(null, "newPass")}
        label="Enter you new password "
        error={errors.newPass}
        iconName="email-outline"
        keyboardType="email-address"
      />
      <Inputfield
        onChangeText={(text) => handleOnchange(text, "confirmPass")}
        onFocus={() => handleError(null, "confirmPass")}
        label="Confirm your password "
        error={errors.confirmPass}
        keyboardType="default"
        password
      />
      <SettingButton title={"Save"} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.bg.primary,
    paddingTop: 50,
  },
});

//make this component available to the app
export default ChangePassword;
