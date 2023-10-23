import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { theme } from "../../../utils/theme";
import { SafeAreaView, Image, Text } from "react-native";
import { data } from "../data/data";
import { View } from "react-native";
import { useWindowDimensions } from "react-native";

export const OnboardingScreen = (props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const RenderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={item.image}
          style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
        />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={(item) => item.id}
        scrollEventThrotlle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
      ></FlatList>
    </SafeAreaView>
  );
};

//rnss
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: theme.colors.text.primary,
    textAlign: "center",
    marginHorizontal: 100,
  },
  itemDescription: {
    fontWeight: "normal",
    fontSize: 17,
    color: theme.colors.text.description,
    textAlign: "center",
    marginHorizontal: 40,
  },
});
