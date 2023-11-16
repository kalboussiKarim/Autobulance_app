import React, { useRef, useState, useEffect } from "react";

import { View, Text, Image } from "react-native";
import MapView, { Marker, Callout, Polyline } from "react-native-maps";
import MapServices from "../services/MapServices";
import CustomMarker from "../components/CustomMarker";
import BottomSheet from "../components/BottomSheet";

import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Button } from "react-native";
import Echo from "laravel-echo";
import Pusher from "pusher-js/react-native";
const MapScreen = () => {
  const refRBSheet = useRef();

  const [startLocation, setStartLocation] = React.useState({
    latitude: 35.4962207,
    longitude: 10.6369407,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const cordinates = [
    startLocation,
    {
      latitude: 35.8025259,
      longitude: 10,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    {
      latitude: 35.7896386,
      longitude: 9.6369407,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
  ];

  const chibaRegion = {
    latitude: 35.6074,
    longitude: 140.1065,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const connectToWebSocket = async () => {
    try {
      const ws = new Echo({
        broadcaster: "pusher",
        Pusher,

        key: "autobulance_key", // app key
        wsHost: "192.168.1.14", // host
        wssHost: "192.168.1.14",
        wsPort: 6001, // port
        wssPort: 6001,
        forceTLS: false,
        encrypted: false,
        cluster: "mt1",
        enabledTransports: ["ws", "wss"],
      });

      console.log(ws);
      const channel = ws.channel("public.localisation");
      channel
        .subscribed(() => {
          console.log("subscribed");
        })
        .listen(".pushLocalisation", (e) => {
          console.log("event listner  :", e);
          refRBSheet.current.open();
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  React.useEffect(() => {
    connectToWebSocket();

    const mapServices = new MapServices();
    mapServices.getLocalidation().then((location) => {
      if (location) {
        console.log("localisation ");
        setStartLocation(location);
        console.log(location);
        console.log(startLocation);
      }
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <MapView
        //region={{ latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        //initialRegion={startLocation}
        // initialRegion={{
        //   latitude: startLocation.latitude,
        //   longitude: startLocation.longitude,
        //   latitudeDelta: 0.09,
        //   longitudeDelta: 0.04,
        // }}
        style={{
          height: "95%",
        }}
      >
        {/* custom marker that show user location  */}
        <CustomMarker
          localisation={startLocation}
          image={require("../../../../assets/user.png")}
          callout={"user"}
        ></CustomMarker>
        <CustomMarker
          localisation={cordinates[cordinates.length - 1]}
          image={require("../../../../assets/ambulance.png")}
          callout={"user"}
        ></CustomMarker>

        <Polyline
          coordinates={cordinates} //specify our coordinates
          strokeColor={"black"}
          strokeWidth={5}
          lineDashPattern={[2]}
        />
      </MapView>

      <BottomSheet
        refRBSheet={refRBSheet}
        date_of_ride={"30/10/2023"}
        duration={"30"}
        auto_state={"on the way"}
      ></BottomSheet>
    </View>
  );
};

export default MapScreen;
