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
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../authentication/slice";

// create a component
const EditProfile = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const update_profile = () => {
    dispatch(
      updateProfile({
        full_name: inputs.full_name,
        phone: inputs.country_code + inputs.phone,
        gender: inputs.gender,
        date_of_birth: inputs.date_of_birth,
      })
    );
  };
  React.useEffect(() => {
    return () => {
      console.log("client" + JSON.stringify(authState.client));
    };
  }, [authState]);
  const [inputs, setInputs] = useState({
    full_name: authState.client.full_name,
    country_code: "",
    phone: authState.client.phone,
    gender: authState.client.gender,
    date_of_birth: authState.client.date_of_birth,
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
          defaultValue={inputs.full_name}
        />
        <PhoneNumber
          handleOnchange={handleOnchange}
          handleError={handleError}
          defaultValue={authState.client.phone}
          error={errors.phone}
        ></PhoneNumber>
        <GenderPicker
          handleOnchange={handleOnchange}
          gender={true ? (authState.client.gender = "male") : false}
        />
        <BirthDateField
          handleOnchange={handleOnchange}
          error={errors.date_of_birth}
          defaultValue={authState.client.date_of_birth}
        />
      </View>
      <SettingButton title={"save"} onPress={update_profile} />
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
