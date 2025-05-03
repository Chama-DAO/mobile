import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const ke = require("../assets/images/ke.png");
const ng = require("../assets/images/ng.png");
const tz = require("../assets/images/tz.png");
const sa = require("../assets/images/sa.png");
const rw = require("../assets/images/rw.png");
export const defaultStyles = StyleSheet.create({
  btn: {
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.textprimary,
  },
});

export const countryFlags = {
  ke,
  ng,
  tz,
  sa,
  rw,
};
