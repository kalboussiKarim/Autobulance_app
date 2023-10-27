import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const Button = ({
  title,
  borderColor,
  titleColor,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={{
        height: 48,
        width: "42%",
        borderRadius: 27,
        justifyContent: "center",
        alignItems: "center",
        borderColor: borderColor,
        borderWidth: 1,
        ...props,
      }}
    >
      <Text style={{ color: titleColor, fontWeight: "bold", fontSize: 18 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
