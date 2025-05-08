import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThirdwebProvider } from "thirdweb/react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    JakartSemiBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    JakartaRegular: require("../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
    JakartaLight: require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    MontserratAlternates: require("../assets/fonts/MontserratAlternates-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThirdwebProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar style="dark" />
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            options={{
              title: "",
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="onboard"
            options={{
              title: "",
              // headerLeft: () => (
              //   <TouchableOpacity onPress={() => router.back()}>
              //     <Ionicons name="arrow-back-outline" size={24} color="black" />
              //   </TouchableOpacity>
              // ),
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="register"
            options={{
              title: "Register",
              // headerLeft: () => (
              //   <TouchableOpacity onPress={() => router.back()}>
              //     <Ionicons name="arrow-back-outline" size={24} color="black" />
              //   </TouchableOpacity>
              // ),
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="createCoinbaseWallet"
            options={{
              title: "Create Wallet",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="otp"
            options={{
              title: "OTP",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="kyc"
            options={{
              title: "KYC Verification",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              title: "Dashboard",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="notifications"
            options={{
              title: "Notifications",
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: "#f0f7f9",
              },
              headerTitle: "Notifications",
              headerTitleStyle: {
                fontFamily: "MontserratAlternates",
                fontSize: 16,
              },
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="mychama"
            options={{
              title: "My Chama",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="chama/contributions"
            options={{
              title: "Pay Contribution",
              headerShown: false,
            }}
          />

          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
