import { View, Button, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome, Feather } from "react-native-vector-icons/";
import { useDispatch, useSelector } from "react-redux";
import Fn from "../utilities/Fn";
const BottomSheet = ({
  refRBSheet,
  date_of_ride,
  auto_state,
  duration,
  manager_details,
}) => {
  const AutobilanceDetail = ({ label, value }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: 8,
          marginHorizontal: 20,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{ fontSize: 20, color: "#cfcfcf", alignSelf: "flex-start" }}
        >
          {label}
        </Text>
        <Text style={{ fontSize: 20, color: "black", alignSelf: "flex-end" }}>
          {value}
        </Text>
      </View>
    );
  };
  const ManagerDetails = ({}) => {
    return (
      <View
        style={{
          flexDirection: "row",
          //    justifyContent: "space-between",
          gap: 50,
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          borderRadius: 20,
          padding: 20,
          //   height: 100,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 50,
          }}
        >
          <FontAwesome name="user" color="#22A699" size={50} />
          <View>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 18,
                margin: 2,
              }}
            >
              Manager_name
            </Text>
            <Text
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: 15,
                margin: 2,
              }}
            >
              Ms : {autobulanceState?.autobulance.manager}
            </Text>
            <Text style={{ fontWeight: "normal", fontSize: 18, margin: 2 }}>
              Tel:{autobulanceState?.autobulance.manager_tel}
            </Text>
          </View>
        </View>
        <Feather name="phone-call" color="#22A699" size={35} />
      </View>
    );
  };
  const autobulanceState = useSelector((state) => state.autobulance);
  return (
    <RBSheet
      ref={refRBSheet}
      height={250}
      closeOnDragDown={true}
      customStyles={{
        wrapper: {
          backgroundColor: "transparent",
        },
        draggableIcon: {
          backgroundColor: "black",
        },
        container: {
          margin: 10,

          height: "45%",
        },
      }}
    >
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          Autobulance Details{" "}
        </Text>
        <View style={{ marginVertical: 5 }}>
          <AutobilanceDetail
            label={"Autobulance  state :"}
            value={autobulanceState?.autobulance.auto_state}
          />
          <AutobilanceDetail
            label={"Date:"}
            value={Fn.getTime() + " : " + Fn.getDate()}
          />
          <AutobilanceDetail label={"Duration:"} value={duration + "  min"} />
        </View>
        <View
          style={{
            marginVertical: 5,
            justifyContent: "center",
            backgroundColor: "#747070", // Couleur de la ligne
            height: 1, // Hauteur de la ligne
            width: "100%", // Largeur de la ligne
          }}
        />
        <ManagerDetails />
      </View>
    </RBSheet>
  );
};

export default BottomSheet;
