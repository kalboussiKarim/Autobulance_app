import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { OnboardingScreen } from "../features/onboarding/views/onboarding.screen";
import { LoginScreen } from "../features/authentication/screens/login.screen";
import { RegisterScreen } from "../features/Registration/screens/register.screen";

const Stack = createStackNavigator();

export const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
