import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { CountryPicker } from "react-native-country-codes-picker";
import { Inputfield } from "../../../../../components/inputField/Inputfield";

export const PhoneNumber = ({ handleOnchange, error, handleError }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const [countryCode, setCountryCode] = useState("+216");

  useEffect(() => {
    handleOnchange(countryCode, "country_code");
  }, []);

  useEffect(() => {
    handleOnchange(phoneNumber, "phone");
  }, [phoneNumber]);

  useEffect(() => {
    handleOnchange(countryCode, "country_code");
  }, [countryCode]);

  return (
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
          setShowPhone(false);
        }}
      />
      <View style={{ flex: 1 }}>
        <Inputfield
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          onFocus={() => handleError(null, "phone")}
          label="Enter your phone number"
          error={error}
          iconName="phone-outline"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};
