import { Inputfield } from "../../../components/inputField/Inputfield";
import { useDispatch, useSelector } from "react-redux";
import DialogComponent from "./DialogComponent";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { carBreakdowns } from "../../../data/data";
import { useState } from "react";
import { handlePostRequest } from "./callforAutobulance/services";

const CallForAutoBulanceDialog = ({
  openDialog,
  handleCancel,
  localisation,
}) => {
  const [inputs, setInputs] = useState({
    car_number: "",
    car_model: "",
    breakdowns: [],
  });
  const [errors, setErrors] = useState({
    car_number: "",
    car_model: "",
    breakdowns: [],
  });

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (err, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: err }));
  };
  const handlePickerChange = (itemValue, itemIndex) => {
    console.log("Pannes sélectionnées :", inputs.breakdowns);

    var isSelected = false;
    isSelected = inputs.breakdowns.includes(itemValue);

    if (isSelected) {
      const updatedBreakdowns = inputs.breakdowns.filter(
        (value) => value !== itemValue
      );
      setInputs((prevState) => ({
        ...prevState,
        breakdowns: updatedBreakdowns,
      }));
    } else {
      const updatedBreakdowns = [...inputs.breakdowns, itemValue];
      setInputs((prevState) => ({
        ...prevState,
        breakdowns: updatedBreakdowns,
      }));
    }
  };
  const dispatch = useDispatch();

  const formValid = () => {
    let isValid = true;
    if (!inputs.car_number) {
      handleError("Please input  your car number", "car_number");
      isValid = false;
    }
    if (!inputs.car_model) {
      handleError("Please input  your car model", "car_model");
      isValid = false;
    }
    if (isValid) {
      handlePostRequest({
        inputs: inputs,
        localisation: localisation,
        dispatch: dispatch,
      });
    }
  };

  return (
    <DialogComponent
      visible={openDialog}
      title="Call for AutoBulance "
      description=""
      content={
        <View style={{ width: "100%" }}>
          <Inputfield
            onChangeText={(text) => handleOnchange(text, "car_number")}
            onFocus={() => handleError(null, "car_number")}
            label="Enter your car number "
            error={errors.car_number}
            iconName="car"
            keyboardType="default"
          />
          <Inputfield
            onChangeText={(text) => handleOnchange(text, "car_model")}
            onFocus={() => handleError(null, "car_model")}
            label="Enter your car model "
            error={errors.car_model}
            iconName="send"
            keyboardType="default"
          />
          <View>
            <Text
              style={{
                color: "grey",
                alignSelf: "center",
                marginVertical: 10,
              }}
            >
              Sélectionnez your care breakdowns:
            </Text>

            <View style={styles.container}>
              <Picker
                selectedValue={inputs.breakdowns}
                onValueChange={handlePickerChange}
                mode="dropdown"
                multiple={true}
              >
                {carBreakdowns.map((breakdown, index) => {
                  return (
                    <Picker.Item
                      style={
                        inputs.breakdowns.includes(breakdown.value)
                          ? styles.pickerItem
                          : styles.noPickedItem
                      }
                      label={breakdown.label}
                      value={breakdown.value}
                      key={index}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      }
      onClose={formValid}
      onCancel={handleCancel}
    ></DialogComponent>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "white",
    borderColor: "white",
    elevation: 10,
    borderRadius: 50,
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
  },
  pickerItem: {
    backgroundColor: "lightblue",
    margin: 10,
    padding: 1,
  },
  noPickedItem: {
    margin: 10,
    padding: 1,
  },
});
export default CallForAutoBulanceDialog;
