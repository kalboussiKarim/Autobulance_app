import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import * as Location from "expo-location";
import { decode } from "@mapbox/polyline"; //please install this package before running!
import axios from "axios";
import { postRoute } from "../slice";
const requestLocationPermission = async () => {
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
export const getLocalidation = async () => {
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
export const getPathBetweenTwoLocations = async ({ start_loc, end_loc }) => {
  try {
    const apiKey = "5b3ce3597851110001cf62484e98718bf64d41648c5b24aabafc05cd"; // Replace with your OpenRouteService API Key
    const start = `${start_loc.longitude},${start_loc.latitude}`;
    const end = `${end_loc.longitude},${end_loc.latitude}`;
    console.log(start, end);
    const apiUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`;
    // console.log(apiUrl);
    const response = await axios.get(apiUrl);

    const routeCoordinates = response.data.features[0].geometry.coordinates;
    let coords = routeCoordinates.map((point, index) => {
      return {
        latitude: point[1],
        longitude: point[0],
      };
    });
    // console.log(coords);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
export const getDistanceBetweenTwoLocalisations = async ({
  long,
  lat,
  dispatch,
}) => {
  try {
    const location = await getLocalidation();
    console.log("location from service is ");
    console.log(location);
    const apiKey = "5b3ce3597851110001cf62484e98718bf64d41648c5b24aabafc05cd";
    const apiUrl = `https://api.openrouteservice.org/v2/isochrones/driving-car`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
    const response = await axios.post(
      apiUrl,
      {
        locations: [
          [location.latitude + 1, location.longitude],
          [lat, long],
        ],

        range: [200, 300],
        interval: 300,
      },
      { headers }
    );
    // console.log(response.data.features);
    const routes = response.data.features;

    const array = [];
    routes.forEach((feature) => {
      const geometry = feature.geometry;
      if (geometry && geometry.coordinates) {
        const coordinates = geometry.coordinates;
        coordinates[0].forEach((firstCoordinate) => {
          const newObject = {
            latitude: firstCoordinate[0],
            longitude: firstCoordinate[1],
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          };
          array.push(newObject);
        });
      }
    });
    //  dispatch(postRoute(array));
    return array;
  } catch (error) {
    if (error.response) {
      console.error(
        "Réponse du serveur avec code d'erreur :",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("Aucune réponse reçue du serveur :", error.request);
    } else {
      console.error(
        "Erreur lors de la configuration de la requête :",
        error.message
      );
    }
  }
};
export const getDuration = async () => {
  try {
    // URL de l'API
    const apiUrl = "https://api.openrouteservice.org/v2/matrix/driving-car";
    const apiKey = "5b3ce3597851110001cf62484e98718bf64d41648c5b24aabafc05cd"; // Replace with your OpenRouteService API Key

    // Paramètres de la requête
    const params = {
      locations: [
        [11.0412233, 35.4962039],
        [8.686507, 49.41943],
      ],
      metrics: ["duration"],
    };

    // Headers avec la clé API
    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };

    // Faire la requête
    const response = await axios.post(apiUrl, params, { headers });

    // Extraire la durée de trajet depuis la réponse
    const travelDuration = response.data.durations[0][1];

    return travelDuration / 60;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de la durée de trajet :",
      error
    );
    throw error;
  }
};
