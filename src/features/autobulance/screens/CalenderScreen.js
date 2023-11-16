import { View, Button, Text } from "react-native";
import MapServices from "../services/MapServices";
import RequestServices from "../services/RequestServices";
import Echo from "laravel-echo";
import Pusher from "pusher-js/react-native";
import { useEffect } from "react";
// import { WebSocket } from "react-native-websocket";

const CalenderScreen = (props) => {
  useEffect(() => {}, []);
  const mapServices = new MapServices();

  const breakdownOptions = [
    { label: "Pneu crevé", value: "pneu_creve" },
    { label: "Batterie à plat", value: "batterie_plate" },
    { label: "Problème de moteur", value: "probleme_moteur" },
    // Ajoutez d'autres options ici
  ];
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Button title="btn" onPress={mapServices.getDuration}>
        button
      </Button>
    </View>
  );
};

export default CalenderScreen;
