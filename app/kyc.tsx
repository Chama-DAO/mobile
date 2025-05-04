import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AppBaner from "./components/AppBaner";
import DocumentTypeSelector from "./components/DocumentTypeSelector";
import colors from "@/constants/Colors";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const KYC = () => {
  const [documentType, setDocumentType] = useState("");
  const [document, setDocument] = useState(null);
  const handleUpload = () => {
    console.log("Uploading document");
    router.navigate("/(tabs)");
  };
  const handleVerify = () => {
    console.log("Verifying document");
    router.navigate("/(tabs)");
  };
  return (
    <SafeAreaView>
      <AppBaner />
      <Text style={styles.title}>KYC Verification</Text>
      <Text style={styles.subtitle}>
        Please upload a supported document below for KYC verification
      </Text>
      <View style={styles.selectorContainer}>
        <DocumentTypeSelector value={documentType} onChange={setDocumentType} />
      </View>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Ionicons name="cloud-upload-outline" size={44} color="#0e0e0e" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default KYC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "MontserratAlternates",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "JakartaRegular",
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  selectorContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  verifyButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 16,
  },
  verifyButtonText: {
    color: colors.textprimary,
    fontFamily: "JakartSemiBold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  uploadContainer: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  uploadButton: {
    marginTop: 20,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: colors.textprimary,
    fontFamily: "JakartSemiBold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
});
