//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaViewComponent,
  Image,
} from "react-native";
import { colors } from "../../../../utils/theme/colors";
import { Inputfield } from "../../../../components/inputField/Inputfield";
import { PhoneNumber } from "../../../authentication/components/regsitration/PhoneNumber/PhoneNumber.styles";
import { GenderPicker } from "../../../authentication/components/regsitration/GenderPicker/GenderPicker.component";
import { BirthDateField } from "../../../../components/dateField/DateField.component";
import { Button } from "../../../authentication/components/Button/button.component";
import SettingButton from "./SettingButton";

// create a component
const EditProfile = () => {
  const [inputs, setInputs] = useState({
    full_name: "",

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
      <View style={{ position: "absolute" }}>
        <Image source={require("../../../../../assets/shape.png")}></Image>
      </View>

      <View
        style={{
          alignSelf: "center",
          borderRadius: 180,
          height: 100,
          width: 100,
          margin: 30,
          backgroundColor: "#22A699",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>A</Text>
      </View>
      <View>
        <Inputfield
          onChangeText={(text) => handleOnchange(text, "full_name")}
          onFocus={() => handleError(null, "full_name")}
          label="Enter your user name"
          error={errors.full_name}
          iconName="account-outline"
          defaultValue={"abir"}
        />
        <PhoneNumber
          handleOnchange={handleOnchange}
          handleError={handleError}
          error={errors.phone}
        ></PhoneNumber>
        <GenderPicker handleOnchange={handleOnchange} />
        <BirthDateField
          handleOnchange={handleOnchange}
          error={errors.date_of_birth}
        />
      </View>
      <SettingButton title={"save"} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    backgroundColor: "#DEE3E2",
  },
});

//make this component available to the app
export default EditProfile;
