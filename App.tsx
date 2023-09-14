import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons  } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button}>
          <Ionicons name="person-add" size={24} color="white" />
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialIcons name="add-shopping-cart" size={24} color="white" />
        </Pressable>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 5
  },
  button: {
    backgroundColor: '#1976d2',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20
  }
});
