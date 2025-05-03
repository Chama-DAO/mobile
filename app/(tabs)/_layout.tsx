import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Home from ".";
import Profile from "./profile";
import Proposals from "./proposals";
import Loans from "./loans";
import { BlurView } from "expo-blur";
import { StyleSheet, Text } from "react-native";
import colors from "@/constants/Colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            tint="light"
            style={{
              flex: 1,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              borderRadius: 24,
              overflow: "hidden",
            }}
          />
        ),
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 34,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.15,
          shadowRadius: 16,
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 24,
          backgroundColor: "transparent",
          marginHorizontal: 16,
          height: 60,
          borderColor: colors.accent,
          overflow: "hidden",
        },
        tabBarShowLabel: true,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "600",
          fontFamily: "JakartaRegular",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="home" color={color} size={!focused ? 32 : 28} />
          ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text
                style={{
                  color,
                  fontWeight: "600",
                  fontFamily: "JakartaRegular",
                }}
              >
                Home
              </Text>
            ) : null,
        }}
      />

      <Tab.Screen
        name="Loans"
        component={Loans}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="cash" color={color} size={!focused ? 32 : 28} />
          ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text
                style={{
                  color,
                  fontWeight: "600",
                  fontFamily: "JakartaRegular",
                }}
              >
                Loans
              </Text>
            ) : null,
        }}
      />
      <Tab.Screen
        name="Proposals"
        component={Proposals}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="hand-left-outline"
              color={color}
              size={!focused ? 32 : 28}
            />
          ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text
                style={{
                  color,
                  fontWeight: "600",
                  fontFamily: "JakartaRegular",
                }}
              >
                Proposals
              </Text>
            ) : null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="person" color={color} size={!focused ? 32 : 28} />
          ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text
                style={{
                  color,
                  fontWeight: "600",
                  fontFamily: "JakartaRegular",
                }}
              >
                Profile
              </Text>
            ) : null,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
