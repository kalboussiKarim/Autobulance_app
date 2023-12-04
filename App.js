import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { OnboardingScreen } from "./src/features/onboarding/views/onboarding.screen";
import { theme } from "./src/utils/theme";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./src/features/authentication/screens/login.screen";
import HomeScreen from "./src/features/autobulance/screens/HomeScreen";
import MapPickerScreen from "./src/features/autobulance/screens/calenderScreenComponents/MapPickerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./src/store";
import * as SecureStore from "expo-secure-store";
import React from "react";
import EditProfile from "./src/features/autobulance/screens/settingsScreens/EditProfile";
import ChangePassword from "./src/features/autobulance/screens/settingsScreens/ChangePassword";
import AddPaymentMethod from "./src/features/autobulance/screens/settingsScreens/AddPaymentMethod";
import Statistic from "./src/features/autobulance/screens/settingsScreens/Statistics";
import FirstAid from "./src/features/autobulance/screens/settingsScreens/FirstAid";
import { RegisterScreen } from "./src/features/authentication/screens/Register.screen";
import { useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}
const AppStack = () => {
  var token = SecureStore.getItemAsync("token");
  const authState = useSelector((state) => state.auth);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {token == null ? (
            <Stack.Group>
              {authState?.isfirstTime ? (
                <Stack.Group>
                  <Stack.Screen
                    name="onboarding"
                    component={OnboardingScreen}
                    options={{ headerShown: false }} // hide the nav bar
                  ></Stack.Screen>
                </Stack.Group>
              ) : (
                <Stack.Group>
                  <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{ headerShown: false }} // hide the nav bar
                  ></Stack.Screen>
                  <Stack.Screen
                    name="register"
                    component={RegisterScreen}
                    options={{ headerShown: false }} // hide the nav bar
                  ></Stack.Screen>
                </Stack.Group>
              )}
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{ headerShown: false }} // hide the nav bar
              ></Stack.Screen>
              <Stack.Screen
                name="map_picker"
                component={MapPickerScreen}
                options={{ headerShown: true }} // hide the nav bar
              ></Stack.Screen>
              <Stack.Screen
                name="edit-profile"
                component={EditProfile}
                options={{ headerShown: true }} // hide the nav bar
              ></Stack.Screen>
              <Stack.Screen
                name="change-password"
                component={ChangePassword}
                options={{ headerShown: true }} // hide the nav bar
              ></Stack.Screen>
              <Stack.Screen
                name="add-payment"
                component={AddPaymentMethod}
                options={{ headerShown: true }} // hide the nav bar
              ></Stack.Screen>
              <Stack.Screen
                name="statistic"
                component={Statistic}
                options={{ headerShown: true }} // hide the nav bar
              ></Stack.Screen>
              <Stack.Screen
                name="first-aid"
                component={FirstAid}
                options={{ headerShown: true }} // hide the nav bar
              ></Stack.Screen>
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
});
