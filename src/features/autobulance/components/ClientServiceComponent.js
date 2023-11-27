//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ReparationDetail from "./ReparationDetailComponentl";
import { TouchableWithoutFeedback } from "react-native";
import { Button } from "../../authentication/components/Button/button.component";
import IconButtonComponent from "./IconButtonComponent";
// create a component
const ClientRequestComponent = ({ upload, pay }) => {
  const [estOuvert, setEstOuvert] = React.useState(false);

  const basculerPanneau = () => {
    setEstOuvert(!estOuvert);
  };
  data = [
    { name: "s1", price: 12 },
    { name: "s1", price: 12 },
    { name: "s1", price: 12 },
    { name: "s1", price: 12 },
    { name: "s1", price: 12 },
    { name: "s1", price: 12 },
    { name: "s1", price: 12 },
  ];
  const ServiceLine = ({ title, value }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingRight: 15,
          margin: 1,
          paddingHorizontal: 10,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 18,

            fontWeight: "bold",
          }}
        >
          {title} :
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {value}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ padding: 10, display: "flex" }}>
      {/* <View style={styles.dots}>
        <MaterialCommunityIcons
          name="close"
          style={{ fontSize: 25 }}
        ></MaterialCommunityIcons>
      </View> */}
      <View style={[styles.container]}>
        <ServiceLine title={"Autobulance"} value={"TUN:1452"}></ServiceLine>
        <ServiceLine title={"Time"} value={"02:50"}></ServiceLine>
        <View
          style={{
            backgroundColor: "#F2BE22",
            borderRadius: 20,
          }}
        >
          <ServiceLine title={"Total"} value={"190 DT"}></ServiceLine>
        </View>
        {/* drow line  */}
        <View
          style={{
            alignSelf: "center",
            marginTop: 10,
            width: "90%",
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        {/* service details collapse  */}
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity onPress={basculerPanneau}>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#22A699",
                  fontWeight: "bold",
                }}
              >
                Reparation details{" "}
              </Text>

              <MaterialCommunityIcons
                style={{
                  fontSize: 25,
                  color: "#22A699",
                }}
                name={
                  estOuvert
                    ? "arrow-down-drop-circle-outline"
                    : "arrow-up-drop-circle-outline"
                }
              />
            </View>
          </TouchableOpacity>
          {estOuvert && (
            <View
              style={{
                padding: 10,
                borderRadius: 5,
                height: 80,
                marginHorizontal: 15,
              }}
            >
              <ScrollView>
                <View>
                  {data.map((item, index) => {
                    return (
                      <ReparationDetail
                        key={index}
                        service={{ name: item.name, price: item.price }}
                      ></ReparationDetail>
                    );
                  })}
                </View>
              </ScrollView>

              {/* Ajoutez le contenu que vous souhaitez afficher lorsque le panneau est ouvert */}
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <IconButtonComponent icon={"upload"} onPress={upload} />
          <IconButtonComponent icon={"dollar"} onPress={pay} />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 10,
    display: "flex",
    elevation: 5,

    backgroundColor: "white",
  },
  dots: {
    // position: "absolute",
    //position: "relative",
    borderRadius: 180,
    marginBottom: -10,
    height: 30,
    width: 30,
    backgroundColor: "#22A699",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
});

//make this component available to the app
export default ClientRequestComponent;
