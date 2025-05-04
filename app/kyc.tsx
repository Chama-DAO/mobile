import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import AppBaner from "./components/AppBaner";
import DocumentTypeSelector from "./components/DocumentTypeSelector";
import colors from "@/constants/Colors";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { launchImageLibraryAsync } from "expo-image-picker";

const KYC = () => {
  const [documentType, setDocumentType] = useState("");
  const [document, setDocument] = useState<string | null>(null);
  const handleUpload = async () => {
    console.log("Uploading document");
    // upload from gallery
    const result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [16, 9],
    });
    if (result.assets) {
      setDocument(result.assets[0].uri);
    }
  };
  const handleVerify = () => {
    console.log("Verifying document");
    router.navigate("/(tabs)");
  };

  const { width, height } = useWindowDimensions();
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
          {document ? (
            <Image
              source={{ uri: document }}
              style={{
                width: width * 0.9,
                height: width * 0.6,
                borderRadius: 8,
              }}
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={44} color="#0e0e0e" />
          )}
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
