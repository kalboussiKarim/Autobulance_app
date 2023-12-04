import React from "react";
import { View, Text } from "react-native";
import { styles } from "./decoration.styles";

export const Decoration = () => {
  return (
    <View>
      <View style={styles.rightCircle} />
      <View style={styles.circle} />
      <View style={styles.topCircle} />
      <View style={styles.title}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Create Account
        </Text>
      </View>
    </View>
  );
};
