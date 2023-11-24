//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Callout, Polyline } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";

// create a component
const CustomPolyline = () => {
  const autobulanceState = useSelector((state) => state.autobulance);
  console.log("loading  is  : " + autobulanceState.loading);
  console.log("route is    : " + autobulanceState.route.length);

  return (
    autobulanceState?.route.length >= 0 && (
      <Polyline
        coordinates={autobulanceState?.route}
        strokeColor={"black"}
        strokeWidth={5}
        lineDashPattern={[2]}
      />
    )
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default CustomPolyline;
