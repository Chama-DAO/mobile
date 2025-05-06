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
    route: "/mychama",
  },
  {
    name: "Take Loan",
    icon: myLoans,
    route: "/myloans",
  },
  {
    name: "Pay Contribution",
    icon: myContributions,
    route: "/mycontributions",
  },
  {
    name: "Join Chama",
    icon: joinChama,
    route: "/joinchama",
  },
  {
    name: "Pay Loan",
    icon: payLoan,
    route: "/payloan",
  },
  {
    name: "Create Chama",
    icon: createChama,
    route: "/createchama",
  },
  {
    name: "Meeting",
    icon: meeting,
    route: "/meeting",
  },
  {
    name: "Settings",
    icon: settings,
    route: "/settings",
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

export const notifications = [
  {
    id: "1",
    title: "New Chama Created",
    message: "The Chama has been created successfully",
    read: false,
    createdAt: "2021-01-01",
    icon: createChama,
  },
  {
    id: "2",
    title: "New Loan Request",
    message: "A new loan request has been created",
    read: false,
    createdAt: "2021-01-01",
    icon: myLoans,
  },
  {
    id: "3",
    title: "Pending Contribution",
    message: "You have a pending contribution of Ksh 1000",
    read: false,
    createdAt: "2021-01-01",
    icon: myContributions,
  },
  {
    id: "4",
    title: "Meeting Reminder",
    message: "The meeting is scheduled for tomorrow",
    read: false,
    createdAt: "2021-01-01",
    icon: meeting,
  },
];
