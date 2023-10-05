import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { Pressable, StyleSheet, View, Image, Alert, Modal, Text } from "react-native";
import AddCharacterForm from "./components/AddCharacterForm";
import useFonts from "./useFonts";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isAddCharacterFormVisible, setIsAddCharacterFormVisible] = useState(false);

  async function loadFonts() {
    await useFonts();
  }

  function handleAddCharacter() {
    setIsAddCharacterFormVisible(true);
  }

  function handleAddObject() {
    Alert.alert("Add object");
  }

  if (!isReady) {
    return (
      <AppLoading 
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => {}}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button} onPress={handleAddCharacter}>
          <Image
            style={styles.buttonImg}
            source={require("./assets/ann_profile_p.png")}
          />
        </Pressable>
        <Pressable style={styles.button} onPress={handleAddObject}>
          <Image
            style={styles.buttonImg}
            source={require("./assets/cup_p.png")}
          />
        </Pressable>

      </View>
      <Text style={styles.test}>{'This is a test'}</Text>
      <StatusBar style="auto" />
      <Modal 
        transparent={true}
        visible={isAddCharacterFormVisible}
        onRequestClose={() => setIsAddCharacterFormVisible(false)}
      >
        <AddCharacterForm />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#1976d2",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  buttonImg: {
    width: 42,
    height: 52,
  },
  test: {
    fontFamily: 'dotGothic',
    fontSize: 30
  }
});
