import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";

const Onboard = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={1}
      style={styles.container}
    >
      {loading && (
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={"#000"} />
        </View>
      )}
      <Image
        source={require("../assets/images/login.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Get Started</Text>
    </KeyboardAvoidingView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "PoppinsRegular",
  },
  logo: {
    alignSelf: "center",
    marginVertical: 10,
    objectFit: "contain",
  },
});
