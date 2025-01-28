import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function ProfileScreen({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Text onPress={() => navigation.replace("Signup")}>
              Don't have account? Sign up
            </Text>
    </View>
  );
}

export default ProfileScreen;
