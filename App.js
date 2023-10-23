import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { OnboardingScreen } from "./src/features/onboarding/views/onboarding.screen";
import { theme } from "./src/utils/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <OnboardingScreen />
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
