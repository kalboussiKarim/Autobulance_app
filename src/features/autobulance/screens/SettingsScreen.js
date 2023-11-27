import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import ClientRequestComponent from "../components/ClientServiceComponent";
import { colors } from "../utilities/theme/colors";
import UserDetails from "../components/settings_components/UserDetails";
const SettingsScreen = (props) => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 25 }}>
        Settings
      </Text>
      {/* user dettails  */}
      <UserDetails />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
});
export default SettingsScreen;
