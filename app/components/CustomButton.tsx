import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import colors from "@/constants/Colors";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  width?: number;
}

const CustomButton = ({ title, onPress, icon, width }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[defaultStyles.btn, styles.btnDark]}
      onPress={onPress}
    >
      <View
        style={[
          {
            width: width ? `${width}%` : "100%",
          },
          styles.btCover,
        ]}
      >
        <TouchableOpacity style={[defaultStyles.btn]}>
          {icon && (
            <Ionicons
              name={icon}
              style={styles.btnIcon}
              size={24}
              color={colors.textprimary}
            />
          )}
          <Text style={styles.buttonDarkText}>{title}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btCover: {
    backgroundColor: "#1A1A1A",
    height: "100%",
    borderRadius: 24,
  },
  btnDark: {
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 24,
    justifyContent: "flex-start",
  },
  btnIcon: {
    paddingRight: 10,
  },
  buttonDarkText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "JakartaRegular",
  },
});
