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
// create a component
const ClientRequestComponent = ({}) => {
  const [estOuvert, setEstOuvert] = React.useState(false);

  const basculerPanneau = () => {
    setEstOuvert(!estOuvert);
  };

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
      <View style={styles.dots}>
        <MaterialCommunityIcons
          name="close"
          style={{ fontSize: 25 }}
        ></MaterialCommunityIcons>
      </View>
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
              <FlatList
                data={[
                  { name: "s1", price: 12 },
                  { name: "s1", price: 12 },
                  { name: "s1", price: 12 },
                  { name: "s1", price: 12 },
                  { name: "s1", price: 12 },
                  { name: "s1", price: 12 },
                  { name: "s1", price: 12 },
                ]}
                renderItem={({ item, index }) => (
                  <ReparationDetail
                    key={index}
                    service={{ name: item.name, price: item.price }}
                  ></ReparationDetail>
                )}
              ></FlatList>
              {/* Ajoutez le contenu que vous souhaitez afficher lorsque le panneau est ouvert */}
            </View>
          )}
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
    elevation: 10,

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
