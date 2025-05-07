import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AppBaner from "./components/AppBaner";
import CustomTextInput from "./components/CustomTextInput";
import PhoneNumberInput from "./components/PhoneNumberInput";
import CountrySelector from "./components/CountrySelector";
import RoleSelector from "./components/RoleSelector";
import colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const register = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("ke");
  const [role, setRole] = useState("member");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+254");

  const handleRegistration = () => {
    console.log("Registration successful");
    router.navigate("/otp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppBaner />
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.subtitle}>Create an account to get started</Text>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.select({ ios: 60, android: 0 })}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ paddingHorizontal: 20 }}>
              <CustomTextInput placeholder="Sylus Abel" title="Full Name" />
              <CustomTextInput
                placeholder="sylusabel@example.com"
                title="Email Address"
              />
              <CountrySelector
                value={country}
                onChange={setCountry}
                setCountryCode={setCountryCode}
              />
              <Text
                style={{
                  marginBottom: 6,
                  fontFamily: "JakartaRegular",
                  fontSize: 14,
                }}
              >
                Phone Number
              </Text>
              <PhoneNumberInput countryCode={countryCode} />
              <CustomTextInput
                placeholder="39296079"
                title="ID Number"
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => handleRegistration()}
              >
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "MontserratAlternates",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  registerButtonText: {
    color: colors.textprimary,
    fontFamily: "JakartSemiBold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});
