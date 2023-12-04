//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import first_aid from "../../../onboarding/data/first_aid";
import { colors } from "../../../../utils/theme/colors";
// create a component
const FirstAid = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <View style={styles.container}>
      {first_aid.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <TouchableOpacity onPress={() => toggleExpand(index)}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemHeaderText}>{item.breakdown_name}</Text>
            </View>
          </TouchableOpacity>
          {expandedIndex === index && (
            <View style={styles.itemDetails}>
              <Text style={{ fontWeight: "bold" }}>Description: </Text>
              <Text>{item.description}</Text>
              <Text style={{ fontWeight: "bold" }}>Solution:</Text>
              <Text> {item.solution}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.bg.primary,
  },
  itemContainer: {
    margin: 10,
    elevation: 5,

    marginBottom: 10,
    backgroundColor: "#22A699",
    borderRadius: 5,
    overflow: "hidden",
  },
  itemHeader: {
    padding: 10,
    height: 50,
    backgroundColor: "white",
  },
  itemHeaderText: {
    fontWeight: "bold",
  },
  itemDetails: {
    padding: 10,
  },
});

//make this component available to the app
export default FirstAid;
