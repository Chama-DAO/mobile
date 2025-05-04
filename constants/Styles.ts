import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const ke = require("../assets/images/ke.png");
const ng = require("../assets/images/ng.png");
const tz = require("../assets/images/tz.png");
const sa = require("../assets/images/sa.png");
const rw = require("../assets/images/rw.png");

const myChama = require("../assets/images/mychama.svg");
const myLoans = require("../assets/images/loan.svg");
const myContributions = require("../assets/images/pay.svg");
const joinChama = require("../assets/images/join.svg");
const payLoan = require("../assets/images/payloan.svg");
const createChama = require("../assets/images/create.svg");
const meeting = require("../assets/images/meeting.svg");
const settings = require("../assets/images/settings.svg");

const blockbusters = require("../assets/images/blockbusters.jpg");
const wandaes = require("../assets/images/wandaes.jpg");
const chamadao = require("../assets/images/Subtract.png");

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

export const quickActions = [
  {
    name: "My Chama",
    icon: myChama,
  },
  {
    name: "Take Loan",
    icon: myLoans,
  },
  {
    name: "Pay Contribution",
    icon: myContributions,
  },
  {
    name: "Join Chama",
    icon: joinChama,
  },
  {
    name: "Pay Loan",
    icon: payLoan,
  },
  {
    name: "Create Chama",
    icon: createChama,
  },
  {
    name: "Meeting",
    icon: meeting,
  },
  {
    name: "Settings",
    icon: settings,
  },
];

export const trendingChamas = [
  {
    name: "Blockbusters",
    icon: blockbusters,
    members: 21,
    contributionAmount: 1000,
    contributionPeriod: "Monthly",
  },
  {
    name: "Wandaes",
    icon: wandaes,
    members: 21,
    contributionAmount: 420,
    contributionPeriod: "Monthly",
  },
  {
    name: "The Chamadao",
    icon: chamadao,
    members: 420,
    contributionAmount: 1000,
    contributionPeriod: "Annual",
  },
];
