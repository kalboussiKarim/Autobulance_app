//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles as inputStyles } from "../../../../components/inputField/inputfield.styles";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Fn from "../../utilities/Fn";

const TimePickerComponent = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState(Fn.getTime);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedTime = `${hours}:${minutes}`;

    setSelectedTime(formattedTime);

    hideDatePicker();
  };
  return (
    <View style={inputStyles.container}>
      <TouchableWithoutFeedback onPress={showDatePicker}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#747070", fontSize: 15 }}>
            {selectedTime} GMT+1
          </Text>
          <MaterialCommunityIcons name="alarm" style={inputStyles.iconStyle} />
        </View>
      </TouchableWithoutFeedback>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

//make this component available to the app
export default TimePickerComponent;
