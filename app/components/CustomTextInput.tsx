import colors from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";

export interface CustomTextInputProps {
  title: string;
  placeholder: string;
  isPassword?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  autoComplete?:
    | "off"
    | "username"
    | "password"
    | "email"
    | "name"
    | "tel"
    | "street-address"
    | "postal-code"
    | "cc-number"
    | "cc-exp"
    | "cc-csc"
    | "cc-type";
  autoCorrect?: boolean;
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password";
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  title,
  placeholder,
  isPassword,
  keyboardType,
  autoComplete,
  autoCorrect,
  textContentType,
}) => {
  return (
    <View>
      <Text
        style={{
          marginVertical: 4,
          fontFamily: "JakartaRegular",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={styles.inputField}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        textContentType={textContentType}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    borderRadius: 24,
    padding: 10,
    backgroundColor: "#F0F9F7",
    fontFamily: "JakartaRegular",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default CustomTextInput;
