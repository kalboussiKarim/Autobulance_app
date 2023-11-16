import {
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import * as Location from "expo-location";
import { decode } from "@mapbox/polyline"; //please install this package before running!

import axios from "axios";
export default class MapServices {
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Geolocation Permission",
          message: "Can we access your location?",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      console.log("granted", granted);
      if (granted === "granted") {
        console.log("You can use Geolocation");
        return true;
      } else {
        console.log("You cannot use Geolocation");
        return false;
      }
    } catch (err) {
      return false;
    }
  };
  getLocalidation = async () => {
    // const result = this.requestLocationPermission();
    // result.then((res) => {
    //   console.log("res is:", res);
    //   if (res) {
    //     console.log(Geolocation.requestAuthorization());
    //     let currentLocation = await Location.getCurrentPositionAsync({});
    // console.log(currentLocation);

    //   }
    // });
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("grant permission ");
      return null;
    }
    try {
      let currentLocation = await Location.getCurrentPositionAsync({});
      return {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };
    } catch (error) {
      console.error("Erreur de géolocalisation : ", error);
      return null; // Gérer l'erreur de géolocalisation
    }
  };
  getPathBetweenTwoLocations = async ({ start_loc, end_loc }) => {
    try {
      const apiKey = "5b3ce3597851110001cf62484e98718bf64d41648c5b24aabafc05cd"; // Replace with your OpenRouteService API Key
      const start = `${start_loc.longitude},${start_loc.latitude}`;
      const end = `${end_loc.longitude},${end_loc.latitude}`;
      console.log(start, end);
      const apiUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`;
      console.log(apiUrl);
      const response = await axios.get(apiUrl);

      const routeCoordinates = response.data.features[0].geometry.coordinates;
      let coords = routeCoordinates.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });
      console.log(coords);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
}
