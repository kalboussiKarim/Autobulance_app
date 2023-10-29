import { Text, View, TouchableWithoutFeedback, Platform } from "react-native";
import dayjs from "dayjs";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export const BirthDatePicker = ({
  date,
  errors,
  showDatePicker,
  onChange = () => {},
  setShowDatePicker = () => {},
}) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          setShowDatePicker();
        }}
      >
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
            {Platform.OS == "ios" ? "" : dayjs(date).format("DD/MM/YYYY")}
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
            value={date}
            maximumDate={new Date()}
            minimumDate={new Date(1820, 1, 1)}
            onChange={() => {
              onChange();
            }}
          />
        </View>
      )}
      {errors.date_of_birth && (
        <Text
          style={{
            marginTop: 10,
            color: "red",
            fontSize: 12,
            marginLeft: 15,
          }}
        >
          {errors.date_of_birth}
        </Text>
      )}
    </View>
  );
};
