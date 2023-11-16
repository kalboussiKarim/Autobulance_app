import { View, Button, Text } from "react-native";
import MapServices from "../services/MapServices";
import RequestServices from "../services/RequestServices";
import Echo from "laravel-echo";
import Pusher from "pusher-js/react-native";
import { useEffect } from "react";
// import { WebSocket } from "react-native-websocket";

const CalenderScreen = (props) => {
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
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("useEffect ");
    connectToWebSocket();
  }, []);
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
      <Button title="btn">button</Button>
    </View>
  );
};

export default CalenderScreen;
