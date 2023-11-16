import { View, Text, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const CustomMarker = ({ localisation, image, callout }) => {
  console.log(image);
  return (
    <Marker coordinate={localisation} title="Start">
      <Image source={image} style={{ height: 35, width: 35 }} />
      <Callout>
        <View>
          <Text>{callout} </Text>
        </View>
      </Callout>
    </Marker>
  );
};

export default CustomMarker;
