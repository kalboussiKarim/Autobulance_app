//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { colors } from "../../utilities/theme/colors";
// create a component
const DisplayCards = () => {
  const cards = [
    { name: "axis Bank", num: "012000000000000000054125" },
    { name: "Axis Bank", num: "01111111111vv11111254125" },
  ];
  return (
    <View style={styles.container}>
      {cards.map((card, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            <MaterialCommunityIcons
              name="credit-card-chip"
              style={{
                color: colors.bg.yellow,
                fontSize: 20,
              }}
            />
            <Text style={[styles.text, { textTransform: "capitalize" }]}>
              {card.name}
            </Text>
            <Text style={styles.text}>
              {"*".repeat(card.num.length - 4) + card.num.slice(-4)}
            </Text>

            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: "white",
                  width: 20,
                  height: 20,
                }}
              >
                <MaterialCommunityIcons
                  name="checkbox-blank-circle-outline"
                  style={{
                    color: "#22A699",
                    fontSize: 20,
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    paddingVertical: 30,
    borderRadius: 15,
  },
  text: {
    fontWeight: "bold",
  },
});

//make this component available to the app
export default DisplayCards;
