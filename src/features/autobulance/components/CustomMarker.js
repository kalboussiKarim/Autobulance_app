import { View, Text, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const CustomMarker = ({ localisation, image, callout }) => {
  return (
    <Marker coordinate={localisation} title="Start">
      <Image source={image} style={{ height: 30, width: 30 }} />
      <Callout>
        <View>
          <Text>{callout} </Text>
        </View>
      </Callout>
    </Marker>
  );
};

export default CustomMarker;
