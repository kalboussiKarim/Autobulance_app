import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "./src/utils/theme";
import { Screens } from "./src/routes/homeStack";

//screens
import { OnboardingScreen } from "./src/features/onboarding/views/onboarding.screen";
import { LoginScreen } from "./src/features/authentication/screens/login.screen";
import { RegisterScreen } from "./src/features/Registration/screens/register.screen";
export default function App() {
  return (
    <View style={styles.container}>
      <Screens />
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
