import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { tokens } from "@/constants/Styles";
import Token from "../components/Token";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
const { width } = Dimensions.get("window");

const Wallet = () => {
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
  const [depositModal, setDepositModal] = useState(false);
  const [depositMethod, setDepositMethod] = useState<"wallet" | "mpesa">(
    "mpesa"
  );

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
              <TouchableOpacity
                onPress={() => setIsBalanceHidden((prev) => !prev)}
              >
                <Ionicons
                  name={isBalanceHidden ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color={colors.chamaGray}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {isBalanceHidden ? (
                <BlurView
                  intensity={10}
                  style={{
                    borderRadius: 16,
                  }}
                >
                  <Text style={styles.walletBalanceAmount}>***********</Text>
                </BlurView>
              ) : (
                <Text style={styles.walletBalanceAmount}>KES 3,432.58</Text>
              )}
            </View>
            <View style={styles.walletBalanceSubtitleContainer}>
              <Text style={styles.walletBalanceSubtitle}>
                April Expenses: KES 1,245
              </Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.walletBalanceSubtitle}> 0xeg8sgu...</Text>
                <Ionicons
                  name="copy-outline"
                  size={16}
                  color={colors.chamaGreen}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => setDepositModal(true)}
            >
              <Ionicons name="add" size={24} color={colors.chamaBlack} />
              <Text style={styles.actionButtonText}>Add funds</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons
                name="arrow-down-outline"
                size={24}
                color={colors.chamaBlack}
              />
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
        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>Transactions</Text>
          <Text style={styles.noTransactionsText}>
            Nothing to show here yet!
          </Text>
        </View>
      </ScrollView>
      <Modal visible={depositModal} transparent animationType="fade">
        <BlurView intensity={20} tint="light" style={styles.overlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Choose a Deposit Method</Text>
              <TouchableOpacity onPress={() => setDepositModal(false)}>
                <Ionicons name="close" size={24} color={colors.accent} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPressIn={() => setDepositMethod("mpesa")}
                style={[
                  styles.depositMethod,
                  {
                    backgroundColor:
                      depositMethod === "mpesa" ? "#E7E7E7FF" : "transparent",
                  },
                ]}
              >
                <Image
                  source={require("@/assets/images/mpesa.png")}
                  style={styles.mpesaIcon}
                  contentFit="contain"
                />
                <Text style={styles.depositMethodText}>M-Pesa</Text>
                <Ionicons
                  name="checkmark-outline"
                  size={24}
                  color={
                    depositMethod === "mpesa" ? colors.accent : "transparent"
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPressIn={() => setDepositMethod("wallet")}
                style={[
                  styles.depositMethod,
                  {
                    backgroundColor:
                      depositMethod === "wallet" ? "#E7E7E7FF" : "transparent",
                  },
                ]}
              >
                <Image
                  source={require("@/assets/images/cbw.svg")}
                  style={styles.mpesaIcon}
                  contentFit="contain"
                />
                <Text style={styles.depositMethodText}>Wallet</Text>
                <Ionicons
                  name="checkmark-outline"
                  size={24}
                  color={
                    depositMethod === "wallet" ? colors.accent : "transparent"
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.depositButton}>
                <Text style={styles.depositButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
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
    backgroundColor: colors.chamaGreen,
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
    backgroundColor: colors.chamaBlack,
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
    color: colors.chamaBlack,
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
    color: colors.chamaGray,
    fontFamily: "JakartaRegular",
    marginVertical: 8,
  },
  walletBalanceAmount: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.chamaGreen,
    fontFamily: "MontserratAlternates",
    marginVertical: 16,
  },
  walletBalanceSubtitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.chamaGray,
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
    fontFamily: "JakartSemiBold",
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
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#f0f7f9",
    borderRadius: 10,
    padding: 16,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: colors.chamaBlue,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  modalTitle: {
    fontFamily: "MontserratAlternates",
    fontSize: 16,
    color: colors.accent,
  },
  modalText: {
    fontFamily: "JakartaRegular",
    fontSize: 14,
    color: colors.chamaBlack,
    lineHeight: 24,
  },
  mpesaIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  depositMethod: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.chamaBlue,
  },
  depositMethodText: {
    fontFamily: "JakartaRegular",
    fontSize: 14,
    color: colors.chamaBlack,
  },
  modalContent: {
    flexDirection: "column",
    gap: 16,
    marginVertical: 10,
  },
  depositButton: {
    backgroundColor: colors.chamaBlack,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  depositButtonText: {
    fontFamily: "JakartaRegular",
    fontSize: 14,
    color: colors.chamaGray,
  },
  transactionsContainer: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  transactionsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.chamaBlack,
    fontFamily: "JakartSemiBold",
    marginBottom: 10,
  },
  noTransactionsText: {
    fontSize: 14,
    color: colors.chamaBlue,
    fontFamily: "JakartaRegular",
    textAlign: "center",
    marginVertical: 10,
  },
});
