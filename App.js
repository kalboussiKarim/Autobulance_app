import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { OnboardingScreen } from "./src/features/onboarding/views/onboarding.screen";
import { theme } from "./src/utils/theme";
import { LoginScreen } from "./src/features/authentication/screens/login.screen";
export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
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
