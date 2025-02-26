import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import LottieView from "lottie-react-native";

const onboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Lottie
                source={require("../assets/images/how.json")}
                autoPlay
                loop
                style={{
                  width: 300,
                  height: 400,
                }}
              />
            ),
            title: "Welcome to ChamaDAO",
            subtitle:
              "ChamaDAO is a decentralized platform that empowers communities to pool funds, invest together, and grow wealth collectively.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Lottie
                  source={require("../assets/images/two.json")}
                  autoPlay
                  loop
                  style={styles.animationContainer}
                />
              </View>
            ),
            title: "How it Works",
            subtitle:
              "Secure contributions with smart contracts, vote on proposals, and track investments in a fully transparent treasury",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View style={styles.animationContainer}>
                <Lottie
                  source={require("../assets/images/start.json")}
                  autoPlay
                  loop
                  style={styles.animationContainer}
                />
              </View>
            ),
            title: "Get Started",
            subtitle:
              "Creat and account, join or create a Chama, and collaborate for a brighter, decentralized financial future",
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  animationContainer: {
    width: 300,
    height: 400,
  },
});

export default onboard;
