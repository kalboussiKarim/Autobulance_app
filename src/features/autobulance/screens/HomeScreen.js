import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Alert,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../utils/theme/colors";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { screens } from "../../../data/data";
import DialogComponent from "../components/DialogComponent";
import CallForAutoBulanceDialog from "../components/CallForAutoBulanceDialog";
import { getBreakdowns } from "../slices/breakdownsSlice";
import { useState, useEffect } from "react";
import { getLocalidation } from "../services/MapServices";
import { getAllRequests } from "../slice";
import { getProfile } from "../../authentication/slice";
const HomeScreen = ({ navigation }) => {
  const [openDialog, setOpendialog] = useState(false);
  const [localisation, setLocalisation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const dispatch = useDispatch();

  dispatch(getBreakdowns());
  dispatch(getAllRequests());
  dispatch(getProfile());

  useEffect(() => {
    getLocalidation().then((location) => {
      if (location) {
        setLocalisation(location);
      }
    });
  }, []);
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "map":
        icon = "home-outline";
        hover = "home-sharp";
        break;
      case "calendar":
        icon = "calendar-outline";
        hover = "calendar-outline";
        break;
      case "wallet":
        icon = "wallet-outline";
        hover = "wallet";
        break;
      case "settings":
        icon = "settings-outline";
        hover = "settings";
        break;
    }

    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Ionicons
          name={routeName === selectedTab ? hover : icon}
          size={22}
          color={routeName === selectedTab ? "black" : "gray"}
        />
        <Text
          style={{
            color: routeName === selectedTab ? "black" : "gray",
            paddingTop: 2,
            textTransform: "capitalize",
          }}
        >
          {routeName}
        </Text>
      </View>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={60}
      circleWidth={50}
      bgColor="white"
      screenOptions={{ headerShown: false }}
      initialRouteName="map"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setOpendialog(true)}
          >
            <CallForAutoBulanceDialog
              type={"EMERGENCY"}
              date={new Date()}
              localisation={localisation}
              openDialog={openDialog}
              handleCancel={() => setOpendialog(false)}
            />
            <MaterialCommunityIcons
              name={"car-emergency"}
              color="black"
              size={33}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      {screens.map((screen) => (
        <CurvedBottomBarExpo.Screen
          key={screen.name}
          name={screen.name}
          position={screen.id <= 1 ? "LEFT" : "RIGHT"}
          component={() => screen.component}
        />
      ))}
    </CurvedBottomBarExpo.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    display: "flex",
    paddingTop: 10,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.icons.primary,
    bottom: 30,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  shawdow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
});
export default HomeScreen;
