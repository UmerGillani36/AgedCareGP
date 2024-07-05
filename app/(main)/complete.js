import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../resources/colors";
import { Button, Text, TextInput } from "react-native-paper";
import LocationCard from "../../components/LocationCard/LocationCard";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const AppointmentComplete = () => {
  const [text, setText] = React.useState("");
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.heading}>
          Appointment Complete For:
        </Text>
        <Text variant="headlineSmall" style={styles.heading}>
          James Young
        </Text>
        <View style={styles.detailCard}>
          <LocationCard />
        </View>
        <View style={styles.audioNotesContainer}>
          <TouchableOpacity style={styles.listenAudioButton}>
            <Feather name="volume-2" size={20} color={colors.teal900} />
            <Text style={styles.listenAudioLabel}>
              Listen to existing notes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteAudio}>
            <MaterialCommunityIcons name="delete" size={24} color={"red"} />
          </TouchableOpacity>
        </View>
        <View style={styles.addAudioContainer}>
          <TouchableOpacity style={styles.listenAudioButton}>
            <FontAwesome name="microphone" size={20} color={colors.teal900} />
            <Text style={styles.listenAudioLabel}>Add Audio Note</Text>
          </TouchableOpacity>
        </View>
        <Text variant="headlineSmall" style={styles.resultHeading}>
          Edit / Add Visit Notes:
        </Text>
        <View style={styles.notesContainer}>
          <Text style={styles.notes}>
            Nam blandit libero convallis ipsum aliquet efficitur. Duis a
            ullamcorper lectus. Vivamus quis urna posuere, gravida tortor ac,
            finibus risus. Proin dignissim interdum libero, in ultrices leo.
            Aenean ac odio arcu. Nunc convallis nisl id ex auctor efficitur. Sed
            id lacus nec nunc varius ultricies id commodo urna.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TextInput
          placeholder="Item to Bill"
          mode="outlined"
          style={styles.textField}
          outlineStyle={styles.outlineStyle}
          selectionColor={colors.teal100}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          mode="contained"
          buttonColor={colors.teal600}
          style={styles.button}
          onPress={() => router.replace("/home")}
          labelStyle={{ fontSize: 18, fontWeight: "bold", letterSpacing: 1 }}
        >
          Visit Complete
        </Button>
      </View>
    </ScrollView>
  );
};

export default AppointmentComplete;

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
    marginVertical: 10,
  },
  audioNotesContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  listenAudioButton: {
    width: "82%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "white",
    elevation: 10,
  },
  listenAudioLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.teal900,
  },
  deleteAudio: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "white",
  },
  addAudioContainer: {
    width: "100%",
    alignItems: "flex-start",
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
    backgroundColor: "white",
  },
  notes: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.teal900,
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
});
