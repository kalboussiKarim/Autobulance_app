import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "./src/utils/theme";
import { LoginScreens } from "./src/routes/LoginStack";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <LoginScreens />
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
});
