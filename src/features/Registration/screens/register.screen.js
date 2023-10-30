import React, { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import { theme } from "../../../utils/theme";
import { Inputfield } from "../../../components/inputField/Inputfield";
import { Decoration } from "../components/Decoration/decoration.component";
import { Button } from "../../authentication/components/Button/button.component";
import { BirthDateField } from "../../../components/dateField/datefield.component";
import { GenderPicker } from "../components/GenderPicker/GenderPicker.component";
import { PhoneNumber } from "../components/PhoneNumber/PhoneNumber.component";
export const RegisterScreen = () => {
  const [inputs, setInputs] = useState({
    full_name: "",
    email: "",
    password: "",
    country_code: "",
    phone: "",
    gender: "",
    date_of_birth: "",
  });

  const [errors, setErrors] = useState({});

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <View style={styles.container}>
      <Decoration />
      <ScrollView style={{ marginTop: 165 }}>
        {/*username, email and password View */}
        <View>
          <Inputfield
            onChangeText={(text) => handleOnchange(text, "full_name")}
            onFocus={() => handleError(null, "full_name")}
            label="Enter your user name"
            error={errors.full_name}
            iconName="account-outline"
          />
          <Inputfield
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            label="Enter you email address"
            error={errors.email}
            iconName="email-outline"
            keyboardType="email-address"
          />
          <Inputfield
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            label="Enter your password"
            error={errors.password}
            keyboardType="default"
            password
          />
        </View>

        {/* Phone number View */}
        <PhoneNumber
          handleOnchange={handleOnchange}
          handleError={handleError}
          error={errors.phone}
        />

        {/* Gender picker View */}
        <GenderPicker handleOnchange={handleOnchange} />

        {/* birth date View */}
        <BirthDateField
          handleOnchange={handleOnchange}
          error={errors.date_of_birth}
        />

        {/*login and register buttons View */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <Button
            onPress={() => {
              console.log("execute validation form");
            }}
            title="login"
            titleColor="#FF5E1D"
            backgroundColor="white"
            borderColor="#FF5E1D"
          />
          <Button
            onPress={() => {
              console.log("navigate to register screen");
              console.log(inputs);
            }}
            title="Register"
            titleColor="white"
            backgroundColor="#F2BE22"
            borderColor="#F2BE22"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
});
