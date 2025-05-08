import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import AppBanner from "./components/AppBanner";
import Lottie from "lottie-react-native";
import colors from "@/constants/Colors";
import { client } from "@/utils/client";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { defineChain } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

const width = Dimensions.get("window").width;

const CreateCoinbaseWallet = () => {
  const wallets = [
    createWallet("com.coinbase.wallet", {
      mobileConfig: {
        callbackURL: "https://www.thechamadao.xyz",
      },
      appMetadata: {
        name: "The ChamaDAO",
        description: "The complete savings platform for EVERYONE!",
        url: "https://www.thechamadao.xyz",
        logoUrl: "https://www.thechamadao.xyz/logo.svg",
      },
    }),
  ];
  return (
    <SafeAreaView style={styles.container}>
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
              primaryButtonBg: colors.chamaGreen,
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
        />
      </TouchableOpacity>
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
  },
  animationContainer: {
    width: width * 0.9,
    height: width,
  },
});
