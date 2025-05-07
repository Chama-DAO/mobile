import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { tokens } from "@/constants/Styles";
import Token from "../components/Token";
const { width } = Dimensions.get("window");

const Wallet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: "#f0f7f9" }}
      >
        <View style={styles.walletContainer}>
          <View style={styles.walletBalanceContainer}>
            <View style={styles.walletBalanceHeader}>
              <Text style={styles.walletBalanceTitle}>My Balance</Text>
              <TouchableOpacity>
                <Ionicons
                  name="eye-outline"
                  size={24}
                  color={colors.chamaBlack}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.walletBalanceAmount}>KES 3, 432.58</Text>
            <View style={styles.walletBalanceSubtitleContainer}>
              <Text style={styles.walletBalanceSubtitle}>
                April Expenses: KES 1, 245
              </Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.walletBalanceSubtitle}> 0xdg8sgu...</Text>
                <Ionicons
                  name="copy-outline"
                  size={16}
                  color={colors.chamaBlack}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="add" size={24} color={"#f0f7f9"} />
              <Text style={styles.actionButtonText}>Add funds</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="arrow-down-outline" size={24} color={"#f0f7f9"} />
              <Text style={styles.actionButtonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tokensContainer}>
          <Text style={styles.tokensTitle}>My Tokens</Text>
          <View style={styles.tokensList}>
            {tokens.map((token) => (
              <Token key={token.id} {...token} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: "MontserratAlternates",
    marginHorizontal: 16,
  },
  walletContainer: {
    width: width * 0.9,
    height: width * 0.58,
    backgroundColor: colors.chamaBlack,
    borderRadius: 16,
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 4,
  },
  walletBalanceContainer: {
    flexDirection: "column",
    padding: 16,
    borderRadius: 16,
    backgroundColor: colors.chamaBlue,
    height: width * 0.4,
    width: width * 0.88,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
    height: 40,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f0f7f9",
    fontFamily: "JakartSemiBold",
  },
  divider: {
    width: StyleSheet.hairlineWidth,
    height: "100%",
    backgroundColor: colors.chamaGreen,
  },
  walletBalanceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.chamaBlack,
    fontFamily: "JakartaRegular",
    marginVertical: 8,
  },
  walletBalanceAmount: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.chamaBlack,
    fontFamily: "MontserratAlternates",
    marginVertical: 16,
  },
  walletBalanceSubtitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.chamaBlack,
    fontFamily: "JakartaRegular",
    marginTop: 4,
  },
  walletBalanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  walletBalanceSubtitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  tokensContainer: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  tokensTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.chamaBlack,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 10,
  },
  tokensList: {
    flexDirection: "column",
    gap: 4,
  },
  token: {
    padding: 16,
    borderRadius: 16,
  },
  tokenName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.chamaBlack,
    fontFamily: "JakartaRegular",
  },
});
