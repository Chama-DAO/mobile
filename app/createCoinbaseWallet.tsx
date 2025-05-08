import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AppBanner from "./components/AppBanner";
import Lottie from "lottie-react-native";
import colors from "@/constants/Colors";
import { client } from "@/utils/client";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { defineChain } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { router } from "expo-router";
const width = Dimensions.get("window").width;

const CreateCoinbaseWallet = () => {
  const [walletConnected, setWalletConnected] = useState(true);
  const activeAccount = useActiveAccount();
  const wallets = [
    createWallet("com.coinbase.wallet", {
      mobileConfig: {
        callbackURL: "myapp://createCoinbaseWallet",
      },
      walletConfig: {
        options: "smartWalletOnly",
      },
      appMetadata: {
        name: "The ChamaDAO",
        description: "The complete savings platform for EVERYONE!",
        url: "https://www.thechamadao.xyz",
        logoUrl: "https://www.thechamadao.xyz/logo.svg",
      },
    }),
  ];
  const completeRegistration = async () => {
    // get registration data from local storage
    // append user wallet address to reg details
    // send the data to the backend
    // show a success lottie animation
    // navigate to home screen
    router.push("/(tabs)");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppBanner />
        <Text style={styles.title}>Smart Wallet</Text>
        <Text style={styles.subtitle}>
          With a smart wallet, you can manage your wallet on the go.
        </Text>
        <View style={styles.animationContainer}>
          <Lottie
            source={require("../assets/images/smart-wallet.json")}
            autoPlay
            loop
            style={styles.animationContainer}
          />
        </View>
        <TouchableOpacity style={styles.createWalletButton}>
          <ConnectButton
            client={client}
            theme={lightTheme({
              colors: {
                modalBg: "#f0f7f9",
                modalOverlayBg: "#f0f7f9",
                primaryButtonBg: "#f0f7f9",
                primaryButtonText: colors.chamaBlack,
              },
              fontFamily: "Poppins",
            })}
            wallets={wallets}
            chain={defineChain(baseSepolia)}
            connectButton={{
              label: "Create a Smart Wallet",
            }}
            connectModal={{
              title: "Coinbase Wallet",
              titleIcon: "https://www.thechamadao.xyz/logo.svg",
              size: "compact",
            }}
            onConnect={(wallet) => {
              setWalletConnected(true);
              localStorage.setItem(
                "wallet",
                JSON.stringify(activeAccount?.address)
              );
            }}
          />
        </TouchableOpacity>
        {walletConnected && (
          <TouchableOpacity
            style={styles.completeRegistrationButton}
            onPress={completeRegistration}
          >
            <Text style={styles.completeRegistrationButtonText}>
              Complete Registration
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCoinbaseWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "MontserratAlternates",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "JakartaRegular",
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 16,
  },
  createWalletButton: {
    marginTop: 32,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.chamaGreen,
    padding: 2,
    marginHorizontal: 16,
    flexDirection: "column",
  },
  animationContainer: {
    width: width * 0.9,
    height: width,
  },
  completeRegistrationButton: {
    backgroundColor: colors.chamaBlack,
    borderRadius: 14,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 32,
  },
  completeRegistrationButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "JakartSemiBold",
  },
});
