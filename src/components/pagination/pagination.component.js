import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

export const Pagination = ({ data, x, screenWidth }) => {
  const PaginationComp = ({ i }) => {
    const animatedDotStyle = useAnimatedStyle(() => {
      const widthAnimation = interpolate(
        x.value,
        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
        [15, 80, 15],
        Extrapolate.CLAMP
      );
      const opacityAnimation = interpolate(
        x.value,
        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
        [0.5, 1, 0.5],
        Extrapolate.CLAMP
      );
      return {
        width: widthAnimation,
        opacity: opacityAnimation,
      };
    });
    return <Animated.View style={[styles.dots, animatedDotStyle]} />;
  };
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => {
        return <PaginationComp i={i} key={i} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    width: 15,
    height: 15,
    backgroundColor: "#22A699",
    marginHorizontal: 5,
    borderRadius: 15,
  },
});
