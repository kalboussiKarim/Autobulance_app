import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import MapView, { Marker, Callout, Polyline } from "react-native-maps";
import CustomMarker from "../components/CustomMarker";
import BottomSheet from "../components/BottomSheet";
import { connectToWebSocket } from "../services/WebSockets";
import CustomPolyline from "../components/CustomPolyline";
import {
  getDuration,
  getDistanceBetweenTwoLocalisations,
  getPathBetweenTwoLocations,
  getLocalidation,
} from "../services/MapServices";
import Fn from "../utilities/Fn";

const MapScreen = () => {
  const dispatch = useDispatch();
  const autobulanceState = useSelector((state) => state.autobulance);

  const refRBSheet = useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  const [autobulance, setAutobulance] = React.useState({});
  const [cordinates, setCordinates] = React.useState([]);
  const [duration, setDuration] = React.useState(0);
  const handleChangeAutobulance = (data) => {
    setAutobulance(data);
  };
  const [startLocation, setStartLocation] = React.useState({
    latitude: 35.4962207,
    longitude: 10.6369407,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  React.useEffect(() => {
    getDuration().then((value) => {
      setDuration(value);
    });
    // getDistanceBetweenTwoLocalisations().then((value) => {
    //   setCordinates(value);
    // });
    setCordinates([
      startLocation,
      {
        latitude: 35.499125,
        latitudeDelta: 0.01,
        longitude: 11.018764,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.495537,
        latitudeDelta: 0.01,
        longitude: 11.019052,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.495553,
        latitudeDelta: 0.01,
        longitude: 11.01926,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.495957,
        latitudeDelta: 0.01,
        longitude: 11.023463,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.48832,
        latitudeDelta: 0.01,
        longitude: 11.030377,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.483528,
        latitudeDelta: 0.01,
        longitude: 11.040188,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.482266,
        latitudeDelta: 0.01,
        longitude: 11.041895,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.482264,
        latitudeDelta: 0.01,
        longitude: 11.041954,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.481974,
        latitudeDelta: 0.01,
        longitude: 11.049844,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.484093,
        latitudeDelta: 0.01,
        longitude: 11.052754,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.486739,
        latitudeDelta: 0.01,
        longitude: 11.053595,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.497542,
        latitudeDelta: 0.01,
        longitude: 11.054661,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.501723,
        latitudeDelta: 0.01,
        longitude: 11.056779,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.502535,
        latitudeDelta: 0.01,
        longitude: 11.056922,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.502704,
        latitudeDelta: 0.01,
        longitude: 11.056887,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.509384,
        latitudeDelta: 0.01,
        longitude: 11.050985,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.513357,
        latitudeDelta: 0.01,
        longitude: 11.043729,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.513764,
        latitudeDelta: 0.01,
        longitude: 11.04261,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.513763,
        latitudeDelta: 0.01,
        longitude: 11.042515,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.513259,
        latitudeDelta: 0.01,
        longitude: 11.040078,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.513257,
        latitudeDelta: 0.01,
        longitude: 11.040073,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.508242,
        latitudeDelta: 0.01,
        longitude: 11.029835,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.508202,
        latitudeDelta: 0.01,
        longitude: 11.029783,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.4996,
        latitudeDelta: 0.01,
        longitude: 11.022129,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.499142,
        latitudeDelta: 0.01,
        longitude: 11.018971,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.499125,
        latitudeDelta: 0.01,
        longitude: 11.018764,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.496834,
        latitudeDelta: 0.01,
        longitude: 11.00489,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.493268,
        latitudeDelta: 0.01,
        longitude: 11.005381,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.49343,
        latitudeDelta: 0.01,
        longitude: 11.006562,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.493598,
        latitudeDelta: 0.01,
        longitude: 11.007873,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.490579,
        latitudeDelta: 0.01,
        longitude: 11.01864,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.490747,
        latitudeDelta: 0.01,
        longitude: 11.019429,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.490927,
        latitudeDelta: 0.01,
        longitude: 11.020009,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.484135,
        latitudeDelta: 0.01,
        longitude: 11.029662,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.482942,
        latitudeDelta: 0.01,
        longitude: 11.030296,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.480567,
        latitudeDelta: 0.01,
        longitude: 11.031975,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.477373,
        latitudeDelta: 0.01,
        longitude: 11.033637,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.475199,
        latitudeDelta: 0.01,
        longitude: 11.042522,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.475119,
        latitudeDelta: 0.01,
        longitude: 11.051719,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.475523,
        latitudeDelta: 0.01,
        longitude: 11.052522,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.480487,
        latitudeDelta: 0.01,
        longitude: 11.054397,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.483517,
        latitudeDelta: 0.01,
        longitude: 11.054884,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.486739,
        latitudeDelta: 0.01,
        longitude: 11.053595,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.496246,
        latitudeDelta: 0.01,
        longitude: 11.060194,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.496119,
        latitudeDelta: 0.01,
        longitude: 11.062892,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.500004,
        latitudeDelta: 0.01,
        longitude: 11.066704,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.501426,
        latitudeDelta: 0.01,
        longitude: 11.066743,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.503625,
        latitudeDelta: 0.01,
        longitude: 11.066324,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.503911,
        latitudeDelta: 0.01,
        longitude: 11.066207,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.506498,
        latitudeDelta: 0.01,
        longitude: 11.064821,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.509807,
        latitudeDelta: 0.01,
        longitude: 11.05937,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.510051,
        latitudeDelta: 0.01,
        longitude: 11.058851,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.515203,
        latitudeDelta: 0.01,
        longitude: 11.048622,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.517673,
        latitudeDelta: 0.01,
        longitude: 11.043669,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.518957,
        latitudeDelta: 0.01,
        longitude: 11.037643,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.519206,
        latitudeDelta: 0.01,
        longitude: 11.036419,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.519407,
        latitudeDelta: 0.01,
        longitude: 11.032546,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.518967,
        latitudeDelta: 0.01,
        longitude: 11.031499,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.516208,
        latitudeDelta: 0.01,
        longitude: 11.029186,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.511449,
        latitudeDelta: 0.01,
        longitude: 11.020632,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.511365,
        latitudeDelta: 0.01,
        longitude: 11.015724,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.510041,
        latitudeDelta: 0.01,
        longitude: 11.01384,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.510016,
        latitudeDelta: 0.01,
        longitude: 11.013833,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.499107,
        latitudeDelta: 0.01,
        longitude: 11.010184,
        longitudeDelta: 0.01,
      },
      {
        latitude: 35.496834,
        latitudeDelta: 0.01,
        longitude: 11.00489,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.417013,
        latitudeDelta: 0.01,
        longitude: 8.676263,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.416829,
        latitudeDelta: 0.01,
        longitude: 8.676338,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.415779,
        latitudeDelta: 0.01,
        longitude: 8.677842,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.412503,
        latitudeDelta: 0.01,
        longitude: 8.685296,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.412531,
        latitudeDelta: 0.01,
        longitude: 8.685624,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.412559,
        latitudeDelta: 0.01,
        longitude: 8.685953,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.413092,
        latitudeDelta: 0.01,
        longitude: 8.692094,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.413585,
        latitudeDelta: 0.01,
        longitude: 8.694044,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.413941,
        latitudeDelta: 0.01,
        longitude: 8.694095,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.414821,
        latitudeDelta: 0.01,
        longitude: 8.694192,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.422555,
        latitudeDelta: 0.01,
        longitude: 8.694225,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.42575,
        latitudeDelta: 0.01,
        longitude: 8.69132,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.427281,
        latitudeDelta: 0.01,
        longitude: 8.68681,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.428371,
        latitudeDelta: 0.01,
        longitude: 8.683547,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.428298,
        latitudeDelta: 0.01,
        longitude: 8.683212,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.425013,
        latitudeDelta: 0.01,
        longitude: 8.681134,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.41718,
        latitudeDelta: 0.01,
        longitude: 8.676268,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.417013,
        latitudeDelta: 0.01,
        longitude: 8.676263,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.419817,
        latitudeDelta: 0.01,
        longitude: 8.671011,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.419457,
        latitudeDelta: 0.01,
        longitude: 8.671014,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.412583,
        latitudeDelta: 0.01,
        longitude: 8.67457,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.408729,
        latitudeDelta: 0.01,
        longitude: 8.676467,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.408819,
        latitudeDelta: 0.01,
        longitude: 8.676899,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.410152,
        latitudeDelta: 0.01,
        longitude: 8.687101,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.408815,
        latitudeDelta: 0.01,
        longitude: 8.691402,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.408655,
        latitudeDelta: 0.01,
        longitude: 8.692246,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.408695,
        latitudeDelta: 0.01,
        longitude: 8.692603,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.414202,
        latitudeDelta: 0.01,
        longitude: 8.702728,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.414552,
        latitudeDelta: 0.01,
        longitude: 8.702644,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.422444,
        latitudeDelta: 0.01,
        longitude: 8.697686,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.422599,
        latitudeDelta: 0.01,
        longitude: 8.697542,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.429237,
        latitudeDelta: 0.01,
        longitude: 8.690671,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.434346,
        latitudeDelta: 0.01,
        longitude: 8.683713,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.435392,
        latitudeDelta: 0.01,
        longitude: 8.681996,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.435114,
        latitudeDelta: 0.01,
        longitude: 8.681768,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.430994,
        latitudeDelta: 0.01,
        longitude: 8.678874,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.42538,
        latitudeDelta: 0.01,
        longitude: 8.674639,
        longitudeDelta: 0.01,
      },
      {
        latitude: 49.419817,
        latitudeDelta: 0.01,
        longitude: 8.671011,
        longitudeDelta: 0.01,
      },
    ]);

    getLocalidation().then((location) => {
      if (location) {
        setStartLocation(location);
        console.log(location);
        console.log(startLocation);
      }
    });
    connectToWebSocket({
      dispatch: dispatch,
      handleChange: handleChangeAutobulance,
      fn: () => {
        setIsVisible(true);
        refRBSheet.current.open();
      },
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
        style={{
          height: "95%",
          position: "relative",
        }}
      >
        {/* custom marker that show user location  */}
        <CustomMarker
          localisation={startLocation}
          image={require("../../../../assets/user.png")}
          callout={"user"}
        ></CustomMarker>
        {autobulanceState?.onService && (
          <View>
            <CustomMarker
              localisation={{
                longitude: autobulanceState?.autobulance.longitude,
                latitude: autobulanceState?.autobulance.lattitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.09,
              }}
              image={require("../../../../assets/ambulance.png")}
              callout={"autobulance"}
            ></CustomMarker>
            <CustomPolyline />
          </View>
        )}
      </MapView>
      {autobulanceState?.onService && (
        <TouchableWithoutFeedback
          onPress={() => {
            refRBSheet.current.open();
          }}
        >
          <View
            style={{
              position: "absolute",
              marginBottom: -50,
              backgroundColor: "white",
              borderRadius: 90,
              padding: 5,
              marginLeft: 30,
              marginTop: 50,
            }}
          >
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../../../assets/mecanicien.png")}
            ></Image>
          </View>
        </TouchableWithoutFeedback>
      )}

      <BottomSheet
        refRBSheet={refRBSheet}
        duration={Math.trunc(parseFloat(duration))}
      ></BottomSheet>
    </View>
  );
};

export default MapScreen;
