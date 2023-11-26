import { View, FlatList, Text, ScrollView } from "react-native";
import ClientRequest from "../models/ClientRequest";
import ClientRequestComponent from "../components/ClientServiceComponent";
import { useDispatch, useSelector } from "react-redux";
import ReparationDetail from "../components/ReparationDetailComponentl";
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

          // alignItems: "center",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            height: "80%",

            width: "100%",
            paddingBottom: 120,
          }}
        >
          {Object.entries(groupedRequests).map(([date, requestsForDate]) => (
            <View key={date}>
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
                  <ClientRequestComponent key={index} />
                ))}
                {/* <FlatList
                  data={requestsForDate}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <View style={{}}>
                      <ClientRequestComponent />
                    </View>
                  )}
                /> */}
              </ScrollView>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PaiementScreen;
