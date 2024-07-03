import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../resources/colors";
import { Searchbar, Text } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard";
import Chip from "../../components/Chip/Chip";

const home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContent}>
        <Text variant="headlineMedium" style={styles.heading}>
          Today's Schedule
        </Text>
        <Text variant="headlineMedium" style={styles.heading}>
          3 June
        </Text>
        <View style={styles.filterContainer}>
          <Searchbar
            placeholder="Search"
            mode="bar"
            style={styles.searchInput}
            onChangeText={setSearchQuery}
            selectionColor={colors.tealA100}
            value={searchQuery}
          />
          <TouchableOpacity style={styles.filterIconContainer}>
            <AntDesign name="filter" size={26} color={colors.teal900} />
          </TouchableOpacity>
        </View>
        <Text variant="headlineLarge" style={styles.resultHeading}>
          Results
        </Text>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <Text variant="headlineLarge" style={styles.resultHeading}>
          Total Results
        </Text>
        <Chip title="Total Patients" value="28/35" bgColor="white" />
        <Chip title="Total Locations" value="2" bgColor="white" />
        <Chip title="3 weeks since last visit" value="3" bgColor="white" />
        <Chip title="With Results" value="5" bgColor="white" />
        <Chip title="Requested Follow ups" value="2" bgColor="white" />
      </View>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.teal300,
    padding: 20,
  },
  headerContent: {
    width: "100%",
    alignItems: "center",
    gap: 10,
    paddingBottom: 40,
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
  },
  filterContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInput: {
    width: "80%",
    borderRadius: 12,
    backgroundColor: "white",
  },
  filterIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  resultHeading: {
    width: "100%",
    textAlign: "left",
    marginVertical: 10,
    fontWeight: "bold",
    color: "white",
  },
});
