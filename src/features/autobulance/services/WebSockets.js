import Echo from "laravel-echo";
import Pusher from "pusher-js/react-native";
import { useDispatch, useSelector } from "react-redux";
import { getDistanceBetweenTwoLocalisations } from "./MapServices";
import { postAutobulance, postRoute } from "../slice";
export const connectToWebSocket = ({ fn, handleChange, dispatch }) => {
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

    const channel = ws.channel("public.localisation");
    channel
      .subscribed(() => {
        console.log("subscribed");
      })
      .listen(".pushLocalisation", async (e) => {
        dispatch(postAutobulance(e));
        await getDistanceBetweenTwoLocalisations({
          long: e.longitude,
          lat: e.lattitude,
          dispatch: dispatch,
        }).then((route) => {
          dispatch(postRoute(route));
        });
        handleChange(e);
        console.log("event listner  :", e);

        fn();
      });
  } catch (error) {
    console.log("error", error);
  }
};
