import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../resources/colors";
import { Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";

const DetailedCard = () => {
  const router = useRouter();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardRow}>
        <Text variant="headlineSmall" style={styles.name}>
          James Young
        </Text>
        <Text variant="bodyMedium" style={styles.dob}>
          04/98
        </Text>
      </View>
      <View
        style={{ ...styles.cardRow, alignItems: "flex-start", marginTop: 10 }}
      >
        <View style={styles.reasonContainer}>
          <Text variant="bodyLarge" style={styles.strong}>
            Reason:
          </Text>
          <Text
            variant="bodyLarge"
            style={{ ...styles.normal, maxWidth: "90%", textAlign: "starts" }}
          >
            General Check Up
          </Text>
        </View>
        <Text variant="bodyLarge" style={styles.normal}>
          <Text style={styles.strong}>Room:</Text> 35
        </Text>
      </View>
      <View
        style={{ ...styles.cardRow, alignItems: "flex-start", marginTop: 10 }}
      >
        <View style={styles.reasonContainer}>
          <Text variant="bodyLarge" style={styles.strong}>
            Phone:
          </Text>
          <Text
            variant="bodyLarge"
            style={{ ...styles.normal, maxWidth: "90%", textAlign: "starts" }}
          >
            0455 566 741
          </Text>
        </View>
        <Text variant="bodyLarge" style={styles.normal}>
          <Text style={styles.strong}>Wing:</Text> 2A
        </Text>
      </View>
      <View style={styles.singleRow}>
        <Text variant="bodyLarge" style={styles.strong}>
          NOK | MPOA | MTDM:
        </Text>
        <Text variant="bodyLarge" style={styles.normal}>
          Robert Young
        </Text>
      </View>
      <View style={styles.singleRow}>
        <Text variant="bodyLarge" style={styles.strong}>
          Email:
        </Text>
        <Text variant="bodyLarge" style={styles.normal}>
          robert.young@gmail.com
        </Text>
      </View>
    </View>
  );
};

export default DetailedCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20,
    elevation: 5,
    marginBottom: 10,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    color: colors.teal900,
  },
  dob: {
    color: colors.orange600,
    fontWeight: "bold",
  },
  normal: {
    color: colors.orange400,
    fontWeight: "bold",
  },
  strong: {
    color: colors.teal800,
    fontWeight: "bold",
  },
  reasonContainer: {
    maxWidth: "70%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
  },
  singleRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
