import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../resources/colors";
import { Button, Text } from "react-native-paper";

const ScheduleCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardRow}>
        <Text variant="headlineSmall" style={styles.name}>
          Cam Smith
        </Text>
        <Text variant="bodyMedium" style={styles.dob}>
          04/98
        </Text>
      </View>
      <View style={styles.cardRow}>
        <Text variant="bodyLarge" style={styles.normal}>
          <Text style={styles.strong}>Wing:</Text> 1A
        </Text>
        <Text variant="bodyLarge" style={styles.normal}>
          <Text style={styles.strong}>Room:</Text> 35
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Button
          mode="contained"
          buttonColor="red"
          style={styles.button}
          labelStyle={{ fontWeight: "bold" }}
        >
          Remove
        </Button>
        <Button
          mode="contained"
          buttonColor={colors.teal600}
          style={styles.button}
          labelStyle={{ fontWeight: "bold" }}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default ScheduleCard;

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
  actionContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
    borderRadius: 8,
  },
});
