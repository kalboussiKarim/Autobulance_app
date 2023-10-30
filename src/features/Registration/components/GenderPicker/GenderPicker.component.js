import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { theme } from "../../../../utils/theme";

export const GenderPicker = ({ handleOnchange }) => {
  const [isMale, setIsMale] = useState(true);

  useEffect(() => {
    handleOnchange("male", "gender");
  }, []);

  useEffect(() => {
    handleOnchangeGender();
  }, [isMale]);

  const handleOnchangeGender = () => {
    isMale
      ? handleOnchange("male", "gender")
      : handleOnchange("female", "gender");
  };
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        height: 50,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setIsMale(!isMale);
        }}
      >
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 16,
              width: 16,
              borderRadius: 4,
              backgroundColor: isMale ? "#22A699" : theme.colors.bg.primary,
              borderColor: isMale ? "#22A699" : "#aaaaaa",
              borderWidth: 1.5,
            }}
          >
            {isMale && (
              <MaterialCommunityIcons
                name="check"
                style={{
                  color: "white",
                  fontSize: 13,
                }}
              />
            )}
          </View>
          <Text style={{ color: "grey" }}>Male</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsMale(!isMale);
        }}
      >
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 16,
              width: 16,
              borderRadius: 4,
              backgroundColor: !isMale ? "#22A699" : theme.colors.bg.primary,
              borderColor: !isMale ? "#22A699" : "#aaaaaa",
              borderWidth: 1.5,
            }}
          >
            {!isMale && (
              <MaterialCommunityIcons
                name="check"
                style={{
                  color: "white",
                  fontSize: 13,
                }}
              />
            )}
          </View>
          <Text style={{ color: "grey" }}>Female</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
