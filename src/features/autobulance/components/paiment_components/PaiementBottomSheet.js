//import liraries
import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import DisplayCards from "./DisplayCard";
import AddNewCard from "./AddNewCard";
import { TouchableOpacity } from "react-native";

// create a component
const PaimentBottomSheet = ({ refRBSheet }) => {
  const [addCard, setAddCard] = React.useState(false);
  const NavigationButton = ({ title, onpress }) => {
    return (
      <TouchableOpacity onPress={onpress}>
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            elevation: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              textTransform: "capitalize",
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      customStyles={{
        wrapper: {
          backgroundColor: "transparent",
        },
        draggableIcon: {
          backgroundColor: "black",
        },
        container: {
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          height: "50%",
        },
      }}
    >
      <View>
        <View
          style={{
            padding: 10,
            borderTopLeftRadius: 20,

            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <NavigationButton
            title={"credits & debit cards "}
            onpress={() => setAddCard(false)}
          />
          <NavigationButton
            title={"Add new card"}
            onpress={() => {
              setAddCard(true);
            }}
          />
        </View>
        <View>{!addCard ? <DisplayCards /> : <AddNewCard />}</View>
        <TouchableWithoutFeedback
          style={{
            // marginTop: 5,
            alignSelf: "flex-end",
          }}
        >
          <View
            style={{
              alignSelf: "center",
              elevation: 2,
              width: "90%",
              backgroundColor: "#F2BE22",
              padding: 15,
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Save and proceed{" "}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </RBSheet>
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
});

//make this component available to the app
export default PaimentBottomSheet;
