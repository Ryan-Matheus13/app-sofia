import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home2({ navigation }: any) {
  useEffect(() => {
    console.log("Home");
  });
  return (
    <View style={styles.container}>
      <Text>Esse é o Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{ width: "100%", backgroundColor: "#555", height: 40 }}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
