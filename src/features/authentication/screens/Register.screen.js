import React, { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import theme from "../../../utils/theme";
import { Inputfield } from "../../../components/inputField/Inputfield";
import { Decoration } from "../components/regsitration/Decoration/decoration.component";
import { Button } from "../components/Button/button.component";
import { BirthDateField } from "../../../components/dateField/DateField.component";
import { GenderPicker } from "../components/regsitration/GenderPicker/GenderPicker.component";
import { PhoneNumber } from "../components/regsitration/PhoneNumber/PhoneNumber.styles";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../slice";
export const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

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
  const formValidation = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (!inputs.full_name) {
      handleError("Please input your full name ", "full_name");
      isValid = false;
    }
    if (!inputs.country_code) {
      handleError("Please input password", "coutry_code");
      isValid = false;
    }
    if (!inputs.phone) {
      handleError("Please input yout number", "phone");
      isValid = false;
    }

    if (!inputs.date_of_birth) {
      handleError("Please input your date_of_birth", "date_of_birth");
      isValid = false;
    }

    if (isValid) {
      handleRegsiter();
    }
  };
  const handleRegsiter = async () => {
    await dispatch(
      register({
        full_name: inputs.full_name,
        email: inputs.email,
        phone: inputs.country_code + inputs.phone,
        date_of_birth: inputs.date_of_birth,
        gender: inputs.gender,
        password: inputs.password,
        password_confirmation: inputs.password,
      })
    ).then((response) => {
      if (authState?.registred) {
        navigation.navigate("home");
      }
    });
  };
  return (
    <View style={styles.container}>
      <Decoration />
      <ScrollView style={{ marginTop: 280 }}>
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
              navigation.navigate("login");
            }}
            title="login"
            titleColor="#FF5E1D"
            backgroundColor="white"
            borderColor="#FF5E1D"
          />
          <Button
            onPress={formValidation}
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
    backgroundColor: "#DEE3E2",
  },
});
