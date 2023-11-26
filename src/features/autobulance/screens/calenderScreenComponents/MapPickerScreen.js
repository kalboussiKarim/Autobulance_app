//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Callout, Polyline } from "react-native-maps";
import { postLocation } from "../../slices/locationSlice";
import { useDispatch, useSelector } from "react-redux";

const MapPickerScreen = () => {
  dispatch = useDispatch();
  const [region, setRegion] = React.useState({
    latitude: 35.4962207,
    longitude: 10.6369407,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setRegion({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
    console.log(region);
    dispatch(postLocation(region));
  };
  return (
    <View style={styles.container}>
      <MapView
        onPress={handleMapPress}
        region={{
          latitude: 35.4962207,
          longitude: 10.6369407,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});

//make this component available to the app
export default MapPickerScreen;
