import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { trendingChamas } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import colors from "@/constants/Colors";

const { width } = Dimensions.get("window");

const JoinChama = () => {
  const { id } = useLocalSearchParams();
  const chama = trendingChamas.find((chama) => chama.name === id);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{chama?.name}</Text>
      </View>
      <View style={styles.chamaContainer}>
        <Text style={styles.membersText}>{chama?.members} members</Text>
        <View style={styles.chamaInfoContainer}>
          <View style={styles.chamaInfoItem}>
            <Image source={chama?.icon} style={styles.chamaImage} />
            <Text style={styles.chamaName}>{chama?.name}</Text>
          </View>
          <View style={styles.financialInfoContainer}>
            <View style={styles.financialInfoItem}>
              <Text style={styles.financialInfoText}>
                {chama?.contributionPeriod} Contribution
              </Text>
              <Text style={styles.amountText}>
                KES {chama?.contributionAmount.toLocaleString()}
              </Text>
            </View>
            <View style={styles.financialInfoItem}>
              <Text style={styles.financialInfoText}>Date Created</Text>
              <Text style={styles.amountText}>May 2025</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.chamaCode}>
              <Text style={styles.footerText}>Chama Code: 0000 0001</Text>
              <Ionicons
                name="copy-outline"
                size={14}
                color={colors.chamaBlack}
              />
            </View>
            <View style={styles.chamaCode}>
              <Text style={styles.footerText}>0xfch5ad67be...</Text>
              <Ionicons
                name="copy-outline"
                size={14}
                color={colors.chamaBlack}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={[
              styles.financialInfoText,
              {
                color: colors.chamaGray,
                textAlign: "center",
                fontSize: 18,
                fontFamily: "JakartSemiBold",
              },
            ]}
          >
            Request to join Chama
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default JoinChama;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F9F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: "MontserratAlternates",
  },
  chamaContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  chamaImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  chamaName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: "MontserratAlternates",
  },
  membersText: {
    fontSize: 14,
    color: "#212121",
    fontFamily: "JakartSemiBold",
    marginBottom: 16,
    marginHorizontal: 4,
  },
  chamaInfoContainer: {
    width: width - 32,
    height: width / 2 - 32,
    backgroundColor: colors.chamaBlue,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  chamaInfoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  financialInfoContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  financialInfoText: {
    fontSize: 14,
    color: "#212121",
    fontFamily: "JakartRegular",
  },
  amountText: {
    fontSize: 24,
    color: "#212121",
    fontFamily: "MontserratAlternates",
  },
  financialInfoItem: {
    gap: 4,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  footerText: {
    fontSize: 12,
    color: "#212121",
    fontFamily: "JakartRegular",
  },
  chamaCode: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  btn: {
    backgroundColor: colors.chamaBlack,
    borderRadius: 18,
    padding: 16,
    marginTop: 32,
  },
});
