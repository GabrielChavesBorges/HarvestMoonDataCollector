import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AddCharacterForm() {
  return (
    <View style={styles.container}>
      <Text>{"Name"}</Text>
      {/* <TextInput /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifySelf: 'center',
    alignSelf: 'center',
    marginTop: 150,
    height: 50,
    width: '90%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#1976d2',
    borderRadius: 20,
    padding: 15
  },
  text: {
    fontFamily: 'DotGothic16',
    fontSize: 20,
    color: '#000000'
  }
  // buttonGroup: {
  //   flexDirection: 'row',
  //   gap: 10
  // },
  // button: {
  //   backgroundColor: '#1976d2',
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   borderRadius: 20
  // },
  // buttonImg: {
  //   width: 42,
  //   height: 52,
  // }
});
