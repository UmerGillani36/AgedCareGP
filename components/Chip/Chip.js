import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { colors } from "../../resources/colors";

const Chip = ({ title, value, bgColor }) => {
  return (
    <View style={{ ...styles.chipContainer, backgroundColor: bgColor }}>
      <Text variant="titleMedium" style={styles.title}>
        {title}:{" "}
      </Text>
      <Text variant="headlineSmall" style={styles.value}>
        {value}
      </Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chipContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    color: colors.teal800,
  },
  value: {
    fontWeight: "bold",
    color: colors.orange400,
  },
});
