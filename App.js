import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { OnboardingScreen } from "./src/features/onboarding/views/onboarding.screen";
import { theme } from "./src/features/autobulance/utilities/theme";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./src/features/authentication/screens/login.screen";
import HomeScreen from "./src/features/autobulance/screens/HomeScreen";
import MapPickerScreen from "./src/features/autobulance/screens/calenderScreenComponents/MapPickerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./src/store";
import * as SecureStore from "expo-secure-store";
import React from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  React.useEffect(async () => {
    // let result = await SecureStore.getItemAsync("onService");
    // if (!result) {
    //   {
    //     await SecureStore.setItemAsync("onService", "0");
    //   }
    // }
    // console.log("this client is using an autobulance ", result);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ headerShown: false }} // hide the nav bar
          ></Stack.Screen>
          <Stack.Screen
            name="onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }} // hide the nav bar
          ></Stack.Screen>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }} // hide the nav bar
          ></Stack.Screen>
          <Stack.Screen
            name="map_picker"
            component={MapPickerScreen}
            options={{ headerShown: true }} // hide the nav bar
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
});
