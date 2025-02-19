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
import AppBaner from "./components/AppBaner";
import CustomTextInput, {
  CustomTextInputProps,
} from "./components/CustomTextInput";
import CustomButton from "./components/CustomButton";
import NotMemberFooter from "./components/NotMemberFooter";

const generalInformation: CustomTextInputProps[] = [
  {
    title: "Username",
    placeholder: "Enter username",
    isPassword: false,
    keyboardType: "default",
    autoComplete: "username",
    autoCorrect: false,
    textContentType: "username",
  },
  {
    title: "Email Address",
    placeholder: "Enter email address",
    isPassword: false,
    keyboardType: "email-address",
    autoComplete: "email",
    autoCorrect: false,
    textContentType: "emailAddress",
  },
  {
    title: "Phone Number",
    placeholder: "Enter password",
    isPassword: false,
    keyboardType: "phone-pad",
    autoComplete: "tel",
    autoCorrect: false,
    textContentType: "telephoneNumber",
  },
];
const locationInformation: CustomTextInputProps[] = [
  {
    title: "ID Number",
    placeholder: "Enter ID number",
    isPassword: false,
    keyboardType: "phone-pad",
    autoComplete: "tel",
    autoCorrect: false,
    textContentType: "telephoneNumber",
  },
  {
    title: "Nationality",
    placeholder: "Where are you from?",
    isPassword: false,
    keyboardType: "default",
    autoComplete: "username",
    autoCorrect: true,
    textContentType: "username",
  },
  {
    title: "Your Role",
    placeholder: "Chama member or admin?",
    isPassword: false,
    keyboardType: "default",
    autoComplete: "username",
    autoCorrect: false,
    textContentType: "username",
  },
];
const securityInformation: CustomTextInputProps[] = [
  {
    title: "Password",
    placeholder: "Enter password",
    isPassword: true,
    keyboardType: "default",
    autoComplete: "password",
    autoCorrect: false,
    textContentType: "password",
  },
  {
    title: "Confirm Password",
    placeholder: "Please confirm password",
    isPassword: true,
    keyboardType: "default",
    autoComplete: "password",
    autoCorrect: false,
    textContentType: "password",
  },
  {
    title: "Recovery Phrase",
    placeholder: "Enter recovery phrase",
    isPassword: false,
    keyboardType: "default",
    autoComplete: "username",
    autoCorrect: false,
    textContentType: "username",
  },
];

const Onboard = () => {
  const [loading, setLoading] = React.useState(false);
  const [bgLevel, setBgLevel] = React.useState(33);
  const [inputTypes, setInputTypes] =
    React.useState<CustomTextInputProps[]>(generalInformation);

  const handleNext = () => {
    if (bgLevel === 33) {
      setBgLevel(66);
      setInputTypes(locationInformation);
    }
    if (bgLevel === 66) {
      setBgLevel(100);
      setInputTypes(securityInformation);
    }
    if (bgLevel === 100) {
      setBgLevel(33);
      setInputTypes(generalInformation);
      //Save data
      //Navigate to OTP
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={1}
      style={styles.container}
    >
      <AppBaner />

      <Text style={styles.title}>
        {bgLevel === 33
          ? "Get Started"
          : bgLevel === 66
          ? "Almost There"
          : "You Made It"}
      </Text>
      <View style={{ marginBottom: 20 }} />
      {inputTypes.map((inputType: CustomTextInputProps, index) => (
        <CustomTextInput key={index} {...inputType} />
      ))}
      <CustomButton
        title="Next"
        onPress={() => handleNext()}
        icon="arrow-forward"
        width={bgLevel}
      />
      <NotMemberFooter />
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
    marginVertical: 20,
    fontFamily: "PoppinsRegular",
  },
  logo: {
    alignSelf: "center",
    marginVertical: 10,
    objectFit: "contain",
  },
});
