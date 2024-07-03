import { StyleSheet, View } from "react-native";
import React from "react";
import logo from "../../assets/logo.jpg";
import { Image } from "expo-image";
import { Text } from "react-native-paper";
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={logo}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <Text variant="headlineSmall" style={styles.heading}>
        GP Assistant
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: 100,
    height: 40,
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
  },
});
