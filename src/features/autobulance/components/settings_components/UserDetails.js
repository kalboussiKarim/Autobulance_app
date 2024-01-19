//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../../utils/theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../authentication/slice";
import ActivityIndicatorComponent from "../../../../components/ActivityIndicator.component";

// create a component
const UserDetails = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(getProfile());
      console.log("user");
      console.log(authState?.client);
    };
  }, [dispatch]);

  return authState?.loading ? (
    <ActivityIndicatorComponent />
  ) : (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 30,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          backgroundColor: colors.bg.green,
          borderRadius: 180,
          height: 60,
          width: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
          {authState?.client?.full_name[0]}
        </Text>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
        <Text style={styles.text}>{authState?.client?.full_name}</Text>
        <Text>{authState?.client?.email}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
});

//make this component available to the app
export default UserDetails;
