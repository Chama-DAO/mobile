import {
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import StepFormIndicator from "../components/StepFormIndicator";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FormTitleWithToolTip from "../components/FormTitleWithToolTip";
import colors from "@/constants/Colors";
import PeriodSelector from "../components/PeriodSelector";
const { width } = Dimensions.get("window");

const Loans = () => {
  const [maximumLoanAmount, setMaximumLoanAmount] = useState("");
  const [loanInterest, setLoanInterest] = useState("");
  const [loanTerm, setLoanTerm] = useState("weekly");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="cash-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Loans Details</Text>
        </View>
        <StepFormIndicator step={4} />
        <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formItemContainer}>
            <FormTitleWithToolTip
              title="Maximum Loan Amount"
              subtitle="What is the maximum loan amount?"
              tooltipText="This is the maximum amount of money that a member can borrow from the chama. It's advisable to set an amount that you and your chama already use or one you have agreed on."
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: colors.primary,
                borderRadius: 24,
                height: 50,
                width: width * 0.9,
                backgroundColor: "#F0F9F7",
                gap: 10,
                paddingHorizontal: 16,
              }}
            >
              <Text style={{ fontFamily: "JakartaRegular" }}>KES</Text>
              <TextInput
                placeholder="Enter the maximum loan amount"
                value={maximumLoanAmount}
                onChangeText={setMaximumLoanAmount}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.formItemContainer}>
            <FormTitleWithToolTip
              title="Loan Interest"
              subtitle="What is the interest on borrowed amounts?"
              tooltipText="This is a percentage of the loan that a member will to pay together with the loan borrowed. "
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: colors.primary,
                borderRadius: 24,
                height: 50,
                width: width * 0.9,
                backgroundColor: "#F0F9F7",
                gap: 10,
                paddingHorizontal: 16,
              }}
            >
              <Text style={{ fontFamily: "JakartaRegular" }}>%</Text>
              <TextInput
                placeholder="Enter the loan interest"
                value={loanInterest}
                onChangeText={setLoanInterest}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.formItemContainer}>
            <FormTitleWithToolTip
              title="Maximum Loan Term"
              subtitle="What is the maximum loan period?"
              tooltipText="This is the period of time in which a loan borrowed can be repaid with no penalty. "
            />
            <PeriodSelector value={loanTerm} onChange={setLoanTerm} />
          </View>
          <View style={styles.formItemContainer}>
            <FormTitleWithToolTip
              title="Loan Penalty"
              subtitle="What is the penalty on a defaulted loan?"
              tooltipText="This is a percentage of the loan that a member will to pay together with the loan borrowed and interest. "
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: colors.primary,
                borderRadius: 24,
                height: 50,
                width: width * 0.9,
                backgroundColor: "#F0F9F7",
                gap: 10,
                paddingHorizontal: 16,
              }}
            >
              <Text style={{ fontFamily: "JakartaRegular" }}>%</Text>
              <TextInput
                placeholder="Enter the loan interest"
                value={loanInterest}
                onChangeText={setLoanInterest}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.formBtnContainer}>
            <TouchableOpacity
              style={styles.previousButton}
              onPress={() => router.push("/create/contributions")}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
              <Text style={styles.previousButtonText}>
                Contributions Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => router.push("/create/overview")}
            >
              <Text style={styles.nextButtonText}>Finish</Text>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Loans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: "MontserratAlternates",
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  formItemContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
    marginVertical: 14,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    borderRadius: 24,
    padding: 10,
    backgroundColor: "#F0F9F7",
    fontFamily: "JakartaRegular",
    paddingHorizontal: 16,
    width: width * 0.9,
  },
  nextButton: {
    backgroundColor: colors.chamaBlack,
    borderRadius: 14,
    padding: 14,
    marginBottom: 24,
    width: width * 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  previousButton: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "JakartSemiBold",
  },
  previousButtonText: {
    color: colors.chamaBlack,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "JakartSemiBold",
  },
  formBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 24,
  },
});
