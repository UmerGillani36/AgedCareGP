import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { colors } from "../../resources/colors";

const details = () => {
  const router = useRouter();

  return (
    <View>
      <Button
        mode="contained"
        buttonColor={colors.teal600}
        style={styles.button}
        labelStyle={{ fontWeight: "bold" }}
        onPress={() => router.replace("/complete")}
      >
        Details
      </Button>
    </View>
  );
};

export default details;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 8,
  },
});
