import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Dimensions,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import StepFormIndicator from "../components/StepFormIndicator";
import FormTitleWithToolTip from "../components/FormTitleWithToolTip";
import colors from "@/constants/Colors";
import MembershipSelector from "../components/MembershipSelector";
const { width } = Dimensions.get("window");

const MembershipDetails = () => {
  const [maxMembership, setMaxMembership] = useState<number | string>(0);
  const [registrationFee, setRegistrationFee] = useState(false);
  const [registrationFeeAmount, setRegistrationFeeAmount] = useState("");
  const [registrationFeeCurrency, setRegistrationFeeCurrency] = useState("KES");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="person-add-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Membership Details</Text>
        </View>
        <StepFormIndicator step={2} />
        <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formItemContainer}>
            <FormTitleWithToolTip
              title="Maximum Membership"
              subtitle="How many members can your chama have?"
              tooltipText="The maximum number of members your chama can have. This will be used to determine the number of members your chama can have."
            />
            <MembershipSelector
              value={maxMembership}
              onChange={setMaxMembership}
            />
          </View>
          <View style={styles.formItemContainer}>
            <FormTitleWithToolTip
              title="Registration Fee"
              subtitle="Do you want to charge a registration fee for your chama?"
              tooltipText="A registration fee is a fee that members pay to join your chama. This fee is deducted from the member's account when they join the chama and is not refundable."
            />
            <Switch
              value={registrationFee}
              onValueChange={setRegistrationFee}
              style={styles.switch}
              trackColor={{ false: colors.chamaBlue, true: colors.chamaBlack }}
              thumbColor={registrationFee ? colors.chamaGray : "#f4f3f4"}
              ios_backgroundColor={colors.chamaBlue}
            />
          </View>
          {registrationFee && (
            <View style={styles.formItemContainer}>
              <FormTitleWithToolTip
                title="Registration Fee Amount"
                subtitle="How much is the registration fee?"
                tooltipText="This is the amount in KES that members will pay to join your chama. This fee is deducted from the member's account when they join the chama and is not refundable."
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
                  placeholder="Enter the registration fee amount"
                  value={registrationFeeAmount}
                  onChangeText={setRegistrationFeeAmount}
                  keyboardType="numeric"
                />
              </View>
            </View>
          )}

          <View style={styles.formBtnContainer}>
            <TouchableOpacity
              style={styles.previousButton}
              onPress={() => router.push("/create/chamaDetails")}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
              <Text style={styles.previousButtonText}>Chama Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => router.push("/create/contributions")}
            >
              <Text style={styles.nextButtonText}>Next</Text>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MembershipDetails;

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
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    color: colors.chamaBlack,
    marginTop: 6,
    marginBottom: 14,
  },
});
