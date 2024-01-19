import { View, Button, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import CallForAutoBulanceDialog from "../components/CallForAutoBulanceDialog";
import TimePickerComponent from "./calenderScreenComponents/TimePickerComponent";
import { useDispatch, useSelector } from "react-redux";
import { styles as inputStyles } from "../../../components/inputField/inputfield.styles";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../utils/theme/colors";
import { getAllRequests } from "../slice";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import { getProfile } from "../../authentication/slice";

const CalenderScreen = (props) => {
  const autobulanceState = useSelector((state) => state.autobulance);
  const localisationState = useSelector((state) => state.location);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const markedDates = (autobulanceState.clientRequeste.length = 0
      ? []
      : autobulanceState.clientRequeste.reduce((result, request) => {
          const date = request.request.date;
          result[date] = {
            selected: true,
            marked: true,
            selectedColor: colors.bg.yellow,
          };
          return result;
        }, {}));
    setMarkedDate(markedDates);
  }, []);
  const [selected, setSelected] = useState("");
  const [markedDate, setMarkedDate] = useState({});
  const [openDialog, setOpendialog] = useState(false);

  return (
    <View
      style={{
        flex: 1,

        paddingHorizontal: 20,
        paddingTop: 40,
      }}
    >
      <View
        style={{
          height: "90%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            alignSelf: "flex-end",
            marginHorizontal: 20,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("map_picker")}
          >
            <MaterialCommunityIcons
              name="map-marker"
              style={[{ fontSize: 50, color: "#22A699" }]}
            />
          </TouchableWithoutFeedback>
        </View>

        <Calendar
          theme={{
            backgroundColor: "#ffffff",
            textDayFontSize: 18,
            textMonthFontSize: 25,
            textMonthFontWeight: "bold",
            textDayFontWeight: "300",
            weekVerticalMargin: 20,
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#9ED0CC",
            selectedDayTextColor: "#ffffff",
            selectedDotColor: "#9ED0CC",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            monthTextColor: "black",
          }}
          style={{
            height: "80%",
            width: "80%",
          }}
          onDayPress={(day) => {
            setSelected(day.dateString);
            setOpendialog(true);
          }}
          markedDates={markedDate}
        />
        <CallForAutoBulanceDialog
          type={"PLANNED"}
          date={selected}
          ExtraContent={
            <View>
              <TimePickerComponent />
            </View>
          }
          localisation={localisationState?.location}
          openDialog={openDialog}
          handleCancel={() => setOpendialog(false)}
        />
      </View>
    </View>
  );
};

export default CalenderScreen;
