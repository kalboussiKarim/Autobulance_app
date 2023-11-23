import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { OnboardingScreen } from "../features/onboarding/views/onboarding.screen";
import { LoginScreen } from "../features/authentication/screens/login.screen";
import { RegisterScreen } from "../features/Registration/screens/register.screen";
import { HomeScreen } from "../features/home/Home.screen";

const Stack = createStackNavigator();

export const LoginScreens = () => {
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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
