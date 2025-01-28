import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function SignupScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignup = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Snappy</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Signup</Text>
      </TouchableOpacity>

      <Text onPress={() => navigation.replace("Login")} style={styles.link}>
        Already have account? Login here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: "auto",
    marginTop: 0,
  },
  title: { fontSize: 52, marginBottom: 20, marginTop: 20, textAlign: "center" },
  input: {
    marginBottom: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    paddingLeft: "20",
    margin: "auto",
  },
  link: { color: "blue", textAlign: "center", marginTop: 20, fontSize: 15 },
  btn: {
    backgroundColor: "#0076ff",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "auto",
  },
  btnText: {
    color: "white",
  },
});

export default SignupScreen;
