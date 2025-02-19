import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import AppBaner from "./components/AppBaner";

const Page = () => {
  const { type } = useLocalSearchParams<{ type: string }>();
  const [loading, setLoading] = React.useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={1}
      style={styles.container}
    >
      {loading && (
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.textprimary} />
        </View>
      )}
      <AppBaner />
      <Text style={styles.title}>Welcome Back</Text>
      <View style={{ marginBottom: 30 }}>
        <Text
          style={{
            marginVertical: 4,
            fontFamily: "JakartaRegular",
            fontSize: 16,
          }}
        >
          Email
        </Text>
        <TextInput
          placeholder="Enter email address"
          style={styles.inputField}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <Text
          style={{
            marginVertical: 4,
            fontFamily: "JakartaRegular",
            fontSize: 16,
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="Enter Password"
          style={styles.inputField}
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoComplete="tel"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
        />
        <Link
          href={{
            pathname: "/",
            params: { type },
          }}
          asChild
          style={[defaultStyles.btn, styles.btnDark]}
        >
          <TouchableOpacity style={[defaultStyles.btn, styles.btnDark]}>
            <Ionicons
              name="log-in"
              style={styles.btnIcon}
              size={24}
              color={colors.textprimary}
            />
            <Text style={styles.buttonDarkText}>Log in</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <Text
        style={{
          color: "#1A1A1A",
          textAlign: "center",
          fontSize: 24,
          fontFamily: "JakartaRegular",
          marginBottom: 20,
        }}
      >
        or
      </Text>
      <Link
        href={{
          pathname: "/",
          params: { type },
        }}
        asChild
        style={[defaultStyles.btn, styles.btnDark]}
      >
        <TouchableOpacity style={[defaultStyles.btn, styles.avaxLogo]}>
          <Image
            source={require("../assets/images/avax.png")}
            style={{
              width: 24,
              height: 24,
              marginRight: 10,
            }}
          />
          <Text style={styles.buttonDarkText}>Signin with Avalanche</Text>
        </TouchableOpacity>
      </Link>
      <Text
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text style={styles.memberLoginText}>Need an account?</Text>
        <Link href={{ pathname: "/onboard" }} asChild>
          <Text
            style={{
              textDecorationLine: "underline",
              marginLeft: 2,
              fontFamily: "JakartaLight",
              fontSize: 18,
              width: 400,
              paddingHorizontal: 40,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Signup
          </Text>
        </Link>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: "100%",

    alignSelf: "center",
    marginVertical: 40,
    objectFit: "contain",
  },
  title: {
    fontSize: 38,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "PoppinsRegular",
    marginTop: 20,
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
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  btnIcon: {
    paddingRight: 10,
  },
  btnDark: {
    backgroundColor: "#1A1A1A",
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 24,
  },
  avaxLogo: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 24,
  },

  buttonDarkText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "JakartaRegular",
  },
  memberLoginText: {
    fontFamily: "JakartaLight",
    fontSize: 18,
    width: 400,
    paddingHorizontal: 40,
    marginTop: 10,
    textAlign: "center",
  },
});
