import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export const BirthDateField = ({ error, handleOnchange, defaultValue }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());

  useEffect(() => {
    handleOnchange(dayjs(birthDate).format("YYYY-MM-DD"), "date_of_birth");
  }, []);

  useEffect(() => {
    handleOnchange(dayjs(birthDate).format("YYYY-MM-DD"), "date_of_birth");
  }, [birthDate]);

  const onChange = (e, selectedDate) => {
    if (selectedDate !== undefined) {
      setShowDatePicker(false);
      setBirthDate(selectedDate);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginVertical: 10,
            height: 50,
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            borderColor: "white",
            elevation: 10,
            borderRadius: 50,
            padding: 5,
          }}
        >
          <Text style={{ color: "black", padding: 10 }}>
            {!showDatePicker && Platform.OS === "android"
              ? dayjs(birthDate).format("YYYY-MM-DD")
              : ""}
          </Text>
          <View>
            <MaterialCommunityIcons
              name="calendar-today"
              style={{ fontSize: 30, marginRight: 10, color: "#22A699" }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {(Platform.OS === "ios" ||
        (showDatePicker && Platform.OS === "android")) && (
        <View
          style={{
            alignItems: Platform.OS == "ios" ? "center" : "baseline",
            position: "absolute",
            marginLeft: 20,
            marginTop: 16,
          }}
        >
          <DateTimePicker
            mode="date"
            value={birthDate}
            defaultValue={defaultValue}
            maximumDate={new Date()}
            minimumDate={new Date(1820, 1, 1)}
            onChange={onChange}
          />
        </View>
      )}
      {error && (
        <Text
          style={{
            marginTop: 10,
            color: "red",
            fontSize: 12,
            marginLeft: 15,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};
