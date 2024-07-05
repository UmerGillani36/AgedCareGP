import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../resources/colors";
import { Button, Text } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import DetailedCard from "../../components/DetailedCard/DetailedCard";
import Chip from "../../components/Chip/Chip";

const details = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.heading}>
          James Young
        </Text>
        <View style={styles.detailCard}>
          <DetailedCard />
        </View>
        <View style={{ ...styles.chipContainer, backgroundColor: "white" }}>
          <Text variant="titleMedium" style={styles.title}>
            Referral:{" "}
          </Text>
          <Text variant="titleMedium" style={styles.value}>
            Pathology Test
          </Text>
        </View>
        <View style={{ ...styles.chipContainer, backgroundColor: "white" }}>
          <Text variant="titleMedium" style={styles.title}>
            Request Date:{" "}
          </Text>
          <Text variant="titleMedium" style={styles.value}>
            1/Jan/24
          </Text>
        </View>
        <View style={{ ...styles.chipContainer, backgroundColor: "white" }}>
          <Text variant="titleMedium" style={styles.title}>
            Status:{" "}
          </Text>
          <Text variant="titleMedium" style={styles.value}>
            Sent to Nursing Home
          </Text>
        </View>
        <Text variant="headlineLarge" style={styles.resultHeading}>
          Quick Check
        </Text>
        <View style={styles.quickCheckContainer}>
          <View style={{ ...styles.checkCard, backgroundColor: "red" }}>
            <Text variant="titleLarge" style={styles.checkCardheading}>
              Bloods Taken
            </Text>
            <Text variant="titleLarge" style={styles.checkCardValue}>
              1/Jan/ 2023
            </Text>
          </View>
          <View
            style={{ ...styles.checkCard, backgroundColor: colors.orangeA400 }}
          >
            <Text variant="titleLarge" style={styles.checkCardheading}>
              Latest CMA
            </Text>
            <Text variant="titleLarge" style={styles.checkCardValue}>
              1/Feb/2024
            </Text>
          </View>
        </View>
        <View style={styles.quickCheckContainer}>
          <View style={{ ...styles.checkCard, backgroundColor: "green" }}>
            <Text variant="titleLarge" style={styles.checkCardheading}>
              Last 731 billed
            </Text>
            <Text variant="titleLarge" style={styles.checkCardValue}>
              1/Jan/ 2023
            </Text>
          </View>
          <View
            style={{ ...styles.checkCard, backgroundColor: colors.tealA700 }}
          >
            <Text variant="titleLarge" style={styles.checkCardheading}>
              Last Psychotropic Review
            </Text>
            <Text variant="titleLarge" style={styles.checkCardValue}>
              1/Feb/2024
            </Text>
          </View>
        </View>
        <Text variant="headlineLarge" style={styles.resultHeading}>
          Active Medications
        </Text>
        <View style={styles.activeListContainer}>
          <View style={styles.activeMedicationsList}>
            <View style={styles.dot} />
            <Text style={styles.medication}>Medication 1</Text>
          </View>
          <View style={styles.activeMedicationsList}>
            <View style={styles.dot} />
            <Text style={styles.medication}>Medication 2</Text>
          </View>
          <View style={styles.activeMedicationsList}>
            <View style={styles.dot} />
            <Text style={styles.medication}>Medication 3</Text>
          </View>
        </View>
        <Text variant="headlineLarge" style={styles.resultHeading}>
          Allergies
        </Text>
        <View style={styles.activeListContainer}>
          <View style={styles.activeMedicationsList}>
            <View style={styles.dot} />
            <Text style={styles.medication}>Allergies 1</Text>
          </View>
          <View style={styles.activeMedicationsList}>
            <View style={styles.dot} />
            <Text style={styles.medication}>Allergies 2</Text>
          </View>
          <View style={styles.activeMedicationsList}>
            <View style={styles.dot} />
            <Text style={styles.medication}>Allergies 3</Text>
          </View>
        </View>
        <Text variant="headlineLarge" style={styles.resultHeading}>
          Tests
        </Text>
        <View style={styles.testContainer}>
          <View style={styles.testContent}>
            <Text variant="labelSmall" style={styles.test}>
              Full Blood Count Tests
            </Text>
          </View>
          <View style={styles.testContent}>
            <Text variant="labelSmall" style={styles.test}>
              Prescriptions Written
            </Text>
          </View>
          <View style={styles.testContent}>
            <Text variant="labelSmall" style={styles.test}>
              Urea and Creatinine
            </Text>
          </View>
          <View style={styles.testContent}>
            <Text variant="labelSmall" style={styles.test}>
              Urea and Creatinine
            </Text>
          </View>
          <View style={styles.testContent}>
            <Text variant="labelSmall" style={styles.test}>
              Urea and Creatinine
            </Text>
          </View>
          <View style={styles.testContent}>
            <Text variant="labelSmall" style={styles.test}>
              Urea and Creatinine
            </Text>
          </View>
          <View style={styles.testContent}>
            <Text variant="labelSmall" style={styles.test}>
              Urea and Creatinine
            </Text>
          </View>
        </View>
        <Text variant="headlineSmall" style={styles.resultHeading}>
          AI Summary Recent Investigations:
        </Text>
        <View style={styles.notesContainer}>
          <Text style={styles.notes}>
            The patient's recent investigations show normal thyroid function,
            low-normal ranges for vitamin B12 and HoloTC, and a moderate kidney
            function status indicated by eGFR. Elevated GGT levels may require
            further liver function assessment. Consider evaluating vitamin B12
            deficiency more closely and assess kidney function with first
            morning urine and cardiovascular risk analysis.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          mode="contained"
          buttonColor={colors.teal600}
          style={styles.button}
          onPress={() => router.replace("/complete")}
          labelStyle={{ fontSize: 18, fontWeight: "bold", letterSpacing: 1 }}
        >
          Visit Complete
        </Button>
      </View>
    </ScrollView>
  );
};

export default details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.teal300,
  },
  header: {
    width: "100%",
    alignItems: "center",
    gap: 10,
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  detailCard: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  resultHeading: {
    width: "100%",
    textAlign: "left",
    marginVertical: 10,
    fontWeight: "bold",
    color: "white",
  },
  notesContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.orange500,
  },
  notes: {
    fontSize: 16,
    // fontWeight: "800",
    color: "black",
  },
  footer: {
    width: "100%",
    backgroundColor: colors.orangeA100,
    paddingHorizontal: 20,
    paddingVertical: 60,
    alignItems: "center",
    gap: 30,
  },
  textField: {
    width: "90%",
    backgroundColor: "white",
  },
  outlineStyle: {
    borderColor: colors.teal800,
  },
  button: {
    width: "70%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
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
  quickCheckContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkCard: {
    width: "48%",
    height: 160,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    borderRadius: 12,
    elevation: 10,
    padding: 10,
    paddingVertical: 20,
  },
  checkCardheading: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  checkCardValue: {
    color: "white",
    textAlign: "center",
  },
  activeListContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    elevation: 10,
    backgroundColor: "white",
  },
  activeMedicationsList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: colors.orangeA200,
    borderRadius: 50,
  },
  medication: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.teal900,
  },
  testContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  testContent: {
    padding: 10,
    borderWidth: 2,
    borderColor: colors.orange700,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  test: {
    fontWeight: "bold",
  },
});
