import { Text, View, StyleSheet } from "react-native";
import LandingPage from "../components/landing-page";

export default function Index() {
  return (
    <View style={styles.container}>
    <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
