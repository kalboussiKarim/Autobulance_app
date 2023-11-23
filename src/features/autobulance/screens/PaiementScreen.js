import { View } from "react-native";
import ClientRequest from "../models/ClientRequest";
import ClientRequestComponent from "../components/ClientServiceComponent";

const PaiementScreen = (props) => {
  return (
    <View
      style={{
        margin: 20,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ClientRequestComponent></ClientRequestComponent>
    </View>
  );
};

export default PaiementScreen;
