import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import ClientRequestComponent from "../components/ClientServiceComponent";

const SettingsScreen = (props) => {
  return (
    <View>
      <ClientRequestComponent />
    </View>
  );
};

export default SettingsScreen;
