import { View, FlatList, Text, ScrollView } from "react-native";
import ClientRequest from "../models/ClientRequest";
import ClientRequestComponent from "../components/ClientServiceComponent";
import { useDispatch, useSelector } from "react-redux";
import ReparationDetail from "../components/ReparationDetailComponentl";
import PaimentBottomSheet from "../components/paiment_components/PaiementBottomSheet";
import React, { useRef, useState, useEffect } from "react";
function groupRequestsByDate(requests) {
  const groupedRequests = {};
  requests.forEach((request) => {
    const date = request.date;
    if (!groupedRequests[date]) {
      groupedRequests[date] = [];
    }
    groupedRequests[date].push(request);
  });
  return groupedRequests;
}
const PaiementScreen = (props) => {
  const refRBSheet = useRef();
  const autobulanceSlice = useSelector((state) => state.autobulance);
  const groupedRequests = groupRequestsByDate(autobulanceSlice.clientRequeste);

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 40,
          paddingHorizontal: 20,
          display: "flex",
          flex: 1,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            height: "100%",

            width: "100%",
            paddingBottom: 120,
          }}
        >
          {Object.entries(groupedRequests).map(([date, requestsForDate]) => (
            <View style={{ marginVertical: 10 }} key={date}>
              <Text
                style={{
                  color: "black",
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  fontStyle: "italic",
                }}
              >
                {date}
              </Text>
              <ScrollView>
                {requestsForDate.map((item, index) => (
                  <ClientRequestComponent
                    upload={() => console.log("upload")}
                    pay={() => refRBSheet.current.open()}
                    key={index}
                  />
                ))}
              </ScrollView>
            </View>
          ))}
        </View>
        <PaimentBottomSheet refRBSheet={refRBSheet} />
      </View>
    </ScrollView>
  );
};

export default PaiementScreen;
