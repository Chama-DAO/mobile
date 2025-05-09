import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import colors from "@/constants/Colors";
import { ImageBackground, Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { quickActions, trendingChamas } from "@/constants/Styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  AccountProvider,
  AccountAvatar,
  AccountName,
  AccountBalance,
  useActiveAccount,
  useWalletDetailsModal,
} from "thirdweb/react";
import { client } from "@/utils/client";
const bgImage = require("@/assets/images/bg.png");

const Home = () => {
  const activeAccount = useActiveAccount();
  const [userIsPartOfAChama, setUserIsPartOfAChama] = useState(false);
  console.log(activeAccount?.address);

  function handleClick() {
    console.log("clicked");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.introTextContainer}>
            <Text style={styles.introText}>Good Morning,</Text>
            <Text style={styles.nameText}>Sylus Abel</Text>
          </View>
          <View style={styles.accountBalanceContainer}>
            <TouchableOpacity onPress={handleClick}>
              <AccountProvider client={client} address={activeAccount!.address}>
                <AccountBalance style={styles.accountBalance} />
              </AccountProvider>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerRight}
              onPress={() => router.navigate("/notifications")}
            >
              <FontAwesome6 name="bell" size={26} color="#212121" />
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationBadgeText}>9+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bgImageContainer}>
          <ImageBackground
            source={bgImage}
            style={styles.bgImage}
            contentFit="contain"
          >
            <View style={styles.contributionsContainer}>
              <View style={styles.contributionAmountContainer}>
                <View style={styles.contributionAmountTitleContainer}>
                  <Text style={styles.contributionAmountTitle}>
                    Next Contribution
                  </Text>
                  <TouchableOpacity
                    style={styles.contributionAmountTitleButton}
                  >
                    <Ionicons name="eye" size={20} color="#212121" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.contributionAmountText}>KES 420</Text>
              </View>
              <View style={styles.manageContributionContainer}>
                <TouchableOpacity
                  style={styles.manageContributionButton}
                  onPress={() => router.navigate("chama/contributions" as any)}
                >
                  <Text style={styles.manageContributionText}>Manage</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.contributionsContainer}>
              <View style={styles.contributionAmountContainer}>
                <View style={styles.contributionAmountTitleContainer}>
                  <Text style={styles.contributionAmountTitle}>My Loans</Text>
                  <TouchableOpacity
                    style={styles.contributionAmountTitleButton}
                  >
                    <Ionicons name="eye" size={20} color="#212121" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.contributionAmountText}>KES 0</Text>
              </View>
              <View style={styles.manageContributionContainer}>
                <TouchableOpacity
                  style={styles.manageContributionButton}
                  onPress={() => router.navigate("chama/myloans" as any)}
                >
                  <Text style={styles.manageContributionText}>Manage</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* <View style={styles.nextStepContainer}>
          <View style={styles.nextStepTextContainer}>
            <Text style={styles.nextStepText}>Next Steps</Text>
            <View style={styles.nextStepProgressContainer}>
              <View style={styles.nextStepProgress} />
            </View>
            <View style={styles.stepsIndicatorContainer}>
              <Text style={styles.stepsIndicatorText}>1/3</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.stepActionContainer}>
            <Ionicons name="add" size={20} color="#212121" />
            <Text style={styles.stepActionText}>Create / Join a Chama</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.quickActionTitle}>Quick Actions</Text>
          {userIsPartOfAChama && (
            <View>
              <View style={styles.quickActionsItemsContainer}>
                {quickActions.slice(0, 4).map((action) => (
                  <TouchableOpacity
                    style={styles.quickActionItem}
                    key={action.name}
                    onPress={() => router.navigate(action.route as any)}
                  >
                    <View style={styles.quickActionItemIconContainer}>
                      <Image
                        source={action.icon}
                        style={styles.quickActionItemIcon}
                        contentFit="contain"
                      />
                    </View>
                    <Text style={styles.quickActionItemText}>
                      {action.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.quickActionsItemsContainer}>
                {quickActions.slice(4, 8).map((action) => (
                  <TouchableOpacity
                    style={styles.quickActionItem}
                    key={action.name}
                    onPress={() => router.navigate(action.route as any)}
                  >
                    <View style={styles.quickActionItemIconContainer}>
                      <Image
                        source={action.icon}
                        style={styles.quickActionItemIcon}
                        contentFit="contain"
                      />
                    </View>
                    <Text style={styles.quickActionItemText}>
                      {action.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
          {!userIsPartOfAChama && (
            <View style={styles.quickActionsItemsContainer}>
              <TouchableOpacity
                style={styles.chamaActionButton}
                onPress={() => router.navigate("/create" as any)}
              >
                <Image
                  source={require("@/assets/images/create.svg")}
                  style={styles.chamaActionButtonIcon}
                  contentFit="contain"
                />
                <Text style={styles.quickActionItemText}>Create a Chama</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.chamaActionButton}
                onPress={() => router.navigate("chama/join" as any)}
              >
                <Image
                  source={require("@/assets/images/join.svg")}
                  style={styles.chamaActionButtonIcon}
                  contentFit="contain"
                />
                <Text style={styles.quickActionItemText}>Join a Chama</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.trendingChamasContainer}>
          <View style={styles.trendingChamasHeader}>
            <Text style={styles.trendingChamasTitle}>Trending Chamas</Text>
            <TouchableOpacity style={styles.trendingChamasButton}>
              <Text style={styles.trendingChamasButtonText}>Search</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={14}
                color="#212121"
                style={{ marginTop: 2 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.trendingChamasItemsContainer}>
            {trendingChamas.map((chama) => (
              <TouchableOpacity
                style={styles.trendingChamaItem}
                key={chama.name}
              >
                <View style={styles.trendingChamaHeader}>
                  <Image
                    source={chama.icon}
                    style={styles.trendingChamaItemIcon}
                    contentFit="cover"
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.trendingChamaItemText}>
                      {chama.name}
                    </Text>
                    {chama.contributionPeriod === "Annual" && (
                      <MaterialCommunityIcons
                        name="check-decagram"
                        size={16}
                        color={colors.accent}
                      />
                    )}
                  </View>
                </View>
                <View style={styles.trendingChamaItemTextContainer}>
                  <View style={styles.altTextContainer}>
                    <Text style={styles.altText}>Active Members</Text>
                    <Text
                      style={[
                        styles.altText,
                        { fontSize: 16, fontFamily: "MontserratAlternates" },
                      ]}
                    >
                      {chama.members} members
                    </Text>
                  </View>
                  <View style={styles.altTextContainer}>
                    <Text style={styles.altText}>Contributions</Text>
                    <Text
                      style={[
                        styles.altText,
                        { fontSize: 16, fontFamily: "MontserratAlternates" },
                      ]}
                    >
                      KES {chama.contributionAmount.toLocaleString()}
                    </Text>
                  </View>
                  <View style={styles.altTextContainer}>
                    <Text style={styles.altText}>Contribution Period</Text>
                    <Text
                      style={[
                        styles.altText,
                        {
                          fontSize: 16,
                          fontFamily: "MontserratAlternates",
                        },
                      ]}
                    >
                      {chama.contributionPeriod}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  introText: {
    fontFamily: "JakartaRegular",
    fontSize: 16,
    color: "#212121",
  },
  nameText: {
    fontFamily: "MontserratAlternates",
    fontSize: 22,
    color: "#212121",
  },
  introTextContainer: {
    flexDirection: "column",
  },
  headerRight: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.primary,
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1,
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationBadgeText: {
    fontFamily: "MontserratAlternates",
    fontSize: 10,
    color: colors.chamaGreen,
  },
  bgImageContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  bgImage: {
    width: "100%",
    height: 250,
    flexDirection: "column",
    justifyContent: "center",
  },
  contributionsContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contributionAmountContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contributionAmountTitle: {
    fontFamily: "JakartaRegular",
    fontSize: 18,
    color: "#212121",
  },
  contributionAmountText: {
    fontFamily: "MontserratAlternates",
    fontSize: 28,
    color: "#212121",
  },
  contributionAmountTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contributionAmountTitleButton: {
    padding: 5,
    borderRadius: 100,
  },
  manageContributionContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  manageContributionButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  manageContributionText: {
    fontFamily: "JakartSemiBold",
    fontSize: 12,
    color: "#f0f7f9",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.primary,
    marginVertical: 10,
  },
  nextStepContainer: {
    marginHorizontal: 16,
    marginTop: 24,
    backgroundColor: colors.chamaYellow,
    padding: 16,
    borderRadius: 10,
  },
  nextStepText: {
    fontFamily: "JakartSemiBold",
  },
  nextStepTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  nextStepProgressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "40%",
    height: 10,
    backgroundColor: colors.chamaBlack,
    borderRadius: 10,
  },
  nextStepProgress: {
    width: "40%",
    height: 10,
    backgroundColor: colors.chamaGreen,
    borderRadius: 10,
  },
  stepsIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepsIndicatorText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
    color: "#212121",
  },
  stepActionContainer: {
    width: "100%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    borderRadius: 16,
    padding: 14,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  stepActionText: {
    fontFamily: "JakartSemiBold",
    fontSize: 12,
    color: "#212121",
    alignSelf: "center",
  },
  quickActionsContainer: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  quickActionTitle: {
    fontFamily: "JakartSemiBold",
    fontSize: 20,
    color: "#212121",
  },
  quickActionsItemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    gap: 4,
  },
  quickActionItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
  },
  quickActionItemIcon: {
    width: 40,
    height: 40,
  },
  quickActionItemText: {
    fontFamily: "JakartaRegular",
    fontSize: 12,
    color: "#212121",
  },
  quickActionItemIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 30,
    width: 60,
    height: 60,
    marginVertical: 5,
  },
  trendingChamasContainer: {
    marginHorizontal: 16,
    marginTop: 24,
    paddingBottom: 40,
  },
  trendingChamasTitle: {
    fontFamily: "JakartSemiBold",
    fontSize: 20,
    color: "#212121",
  },
  trendingChamasItemsContainer: {
    marginTop: 10,
  },
  trendingChamaItem: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#EAEFEFFF",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginBottom: 10,
  },
  trendingChamaItemIcon: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  trendingChamaHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  trendingChamaItemText: {
    fontFamily: "JakartSemiBold",
    fontSize: 16,
    color: colors.chamaBlack,
  },
  trendingChamaItemTextContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    gap: 16,
    width: "90%",
    marginBottom: 10,
  },
  altTextContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    gap: 4,
  },
  altText: {
    fontFamily: "JakartaRegular",
    fontSize: 12,
    color: "#212121",
  },
  trendingChamasHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trendingChamasButton: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  trendingChamasButtonText: {
    fontFamily: "JakartaRegular",
    fontSize: 12,
    color: "#212121",
  },
  accountBalance: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    color: "#212121",
  },
  accountBalanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  chamaActionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.chamaGreen,
    borderRadius: 10,
    padding: 10,
    width: "48%",
  },
  chamaActionButtonIcon: {
    width: 40,
    height: 40,
  },
  chamaActionButtonText: {
    fontFamily: "JakartaRegular",
    fontSize: 12,
    color: "#212121",
  },
});
