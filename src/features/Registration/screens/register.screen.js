import React, { useState } from "react";
import dayjs from "dayjs";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { theme } from "../../../utils/theme";
import { Inputfield } from "../../../components/inputField/Inputfield";
import { Decoration } from "../components/Decoration/decoration.component";
import { Button } from "../../authentication/components/Button/button.component";
import { BirthDateField } from "../../../components/dateField/datefield.component";

export const RegisterScreen = () => {
  const [inputs, setInputs] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    date_of_birth: "",
  });

  const [errors, setErrors] = useState({});
  const [showPhone, setShowPhone] = useState(false);
  const [countryCode, setCountryCode] = useState("+216");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnchange = (text, input) => {
    if (input == "phone") {
      setInputs((prevState) => ({
        ...prevState,
        [input]: countryCode + text,
      }));
    } else {
      setInputs((prevState) => ({ ...prevState, [input]: text }));
    }
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <View style={styles.container}>
      <Decoration />
      <ScrollView style={{ marginTop: 290 }}>
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
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => setShowPhone(true)}
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "space-around",
              elevation: 10,
              borderRadius: 50,
              height: 50,
              marginLeft: 20,
              width: 90,
              marginVertical: 10,
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ marginLeft: 20, color: "grey" }}>{countryCode}</Text>
            <MaterialCommunityIcons
              name="arrow-down-thick"
              style={{ fontSize: 30, marginRight: 10, color: "#22A699" }}
            />
          </TouchableOpacity>
          <CountryPicker
            style={{
              modal: {
                height: 300,
              },
            }}
            show={showPhone}
            onBackdropPress={() => setShowPhone(false)}
            enableModalAvoiding={true}
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setPhoneNumber(phoneNumber);
              setShowPhone(false);
            }}
          />
          <View style={{ flex: 1 }}>
            <Inputfield
              onChangeText={(text) => {
                handleOnchange(text, "phone");
                setPhoneNumber(text);
              }}
              onFocus={() => handleError(null, "phone")}
              label="Enter your phone number"
              error={errors.phone}
              iconName="phone-outline"
              keyboardType="numeric"
            />
          </View>
        </View>

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
