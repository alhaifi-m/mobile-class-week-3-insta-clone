import { Text, View, StyleSheet } from "react-native";
import LandingPage from "../components/landing-page";
import MainPage from "../components/main-page";
export default function Index() {
  return (
    <View style={styles.container}>
    {/* <LandingPage /> */}
    <MainPage/>
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
