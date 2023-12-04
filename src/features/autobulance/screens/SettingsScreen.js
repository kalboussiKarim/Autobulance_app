import React, { useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import ClientRequestComponent from "../components/ClientServiceComponent";
import { colors } from "../../../utils/theme/colors";
import UserDetails from "../components/settings_components/UserDetails";
import ListItemComponent from "../components/settings_components/ListItemComponent";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = (props) => {
  const navigation = useNavigation();
  const settings = [
    {
      name: "Edit profile",
      icon: "caret-forward",
      colored: false,
      onpress: () => {
        navigation.navigate("edit-profile");
      },
    },
    {
      name: "Change password",
      icon: "caret-forward",
      colored: false,
      onpress: () => {
        navigation.navigate("change-password");
      },
    },
    {
      name: "Add a Payment Method",
      icon: "add",
      colored: false,
      onpress: () => {
        navigation.navigate("add-payment");
      },
    },
    { name: "Push notification", icon: "toggle", colored: false },
    { name: "Dark mode", icon: "toggle", colored: false },
    {
      name: "Statistic",
      icon: "caret-forward",
      colored: false,
      onpress: () => {
        navigation.navigate("statistic");
      },
    },
    { name: "Tel:70888505", icon: "megaphone-outline", colored: true },
    {
      name: "First_Aid ",
      icon: "caret-forward",
      colored: false,
      onpress: () => {
        navigation.navigate("first-aid");
      },
    },
  ];
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 25 }}>
        Settings
      </Text>
      {/* user dettails  */}
      <UserDetails />
      <ScrollView>
        {settings.map((setting) => {
          return (
            <ListItemComponent
              onpress={setting.onpress}
              title={setting.name}
              icon={setting.icon}
              colored={setting.colored}
            />
          );
        })}
      </ScrollView>
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
