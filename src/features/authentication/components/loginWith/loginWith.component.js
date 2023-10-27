import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SocialIcon } from "react-native-elements";

export const LoginWith = ({ label, iconName, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={{
        flex: 1,
        height: 45,
        width: "80%",
        borderRadius: 27,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <View>
        <SocialIcon type={iconName} style={{ height: 35, width: 35 }} />
      </View>
      <View>
        <Text style={{ fontSize: 15, color: "#646060" }}>{label}</Text>
      </View>
      <View style={{ height: 35, width: 35 }}></View>
    </TouchableOpacity>
  );
};
