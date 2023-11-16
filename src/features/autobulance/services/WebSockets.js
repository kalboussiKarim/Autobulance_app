import Echo from "laravel-echo";
import Pusher from "pusher-js/react-native";

export const connectToWebSocket = ({ fn, handleChange }) => {
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
        handleChange(e);
        console.log("event listner  :", e);

        fn();
      });
  } catch (error) {
    console.log("error", error);
  }
};
