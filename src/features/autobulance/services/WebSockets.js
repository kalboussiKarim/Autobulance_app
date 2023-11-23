import Echo from "laravel-echo";
import Pusher from "pusher-js/react-native";
import { useDispatch, useSelector } from "react-redux";
import { postAutobulance } from "../slice";
import MapServices from "./MapServices";
export const connectToWebSocket = ({ fn, handleChange, dispatch }) => {
  const mapServices = MapServices();
  try {
    const ws = new Echo({
      broadcaster: "pusher",
      Pusher,
      key: "autobulance_key", // app key
      wsHost: "192.168.1.36", // host
      wssHost: "192.168.1.36",
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
      .listen(".pushLocalisation", async (e) => {
        // dispatch(postAutobulance(e));
        // await MapServices().getDistanceBetweenTwoLocalisations({
        //   long: e.longitude,
        //   lat: e.lattitude,
        //   dispatch: dispatch,
        // });
        handleChange(e);
        console.log("event listner  :", e);

        fn();
      });
  } catch (error) {
    console.log("error", error);
  }
};
