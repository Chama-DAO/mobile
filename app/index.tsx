import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require("../assets/images/Subtract.png")}
        />
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to ChamaDAO</Text>
        <Text style={styles.welcomeText2}>
          A decentralized platform inspired by Kenya’s trusted chamas.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.btn}>
          <Button
            title="Get Started"
            color={"#fff"}
            onPress={() => console.log("Get Started")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text style={styles.memberLoginText}>
          Already a member?
          <Text style={{ textDecorationLine: "underline", marginLeft: 2 }}>
            Login
          </Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#4ccfb3",
  },
  bannerContainer: {
    marginTop: 100,
  },
  bannerImage: {},
  welcomeContainer: {
    marginTop: 70,
  },
  buttonContainer: {
    marginTop: 50,
    alignContent: "center",
  },
  welcomeText: {
    fontFamily: "PoppinsRegular",
    fontSize: 40,
    width: 400,
    paddingHorizontal: 40,
  },
  welcomeText2: {
    fontFamily: "JakartaLight",
    fontSize: 20,
    width: 400,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  memberLoginText: {
    fontFamily: "JakartaLight",
    fontSize: 18,
    width: 400,
    paddingHorizontal: 40,
    marginTop: 10,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#1A1A1A",
    padding: 10,
    borderRadius: 100,
    width: 350,
    textAlign: "center",
  },
});
