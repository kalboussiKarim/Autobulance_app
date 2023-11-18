import { View, Button, Text } from "react-native";
import { useEffect, useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import CallForAutoBulanceDialog from "../components/CallForAutoBulanceDialog";
import TimePickerComponent from "./calenderScreenComponents/TimePickerComponent";

const CalenderScreen = (props) => {
  useEffect(() => {}, []);
  const [selected, setSelected] = useState("");
  const [openDialog, setOpendialog] = useState(false);

  return (
    <View
      style={{
        flex: 1,

        paddingHorizontal: 20,
        paddingTop: 50,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          height: "90%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          backgroundColor: "white",
        }}
      >
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
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
            },
          }}
        />
        <CallForAutoBulanceDialog
          ExtraContent={<TimePickerComponent />}
          //localisation={localisation}
          openDialog={openDialog}
          handleCancel={() => setOpendialog(false)}
        />
      </View>
    </View>
  );
};

export default CalenderScreen;
