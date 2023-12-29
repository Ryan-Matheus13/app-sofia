import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Input(props: any) {
  const [showPassword, setShowPassword] = useState<any>(true);
  return (
    <>
      {props.type != "password" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            keyboardType={props.type}
            placeholderTextColor="#8FA7B2"
          />
        </View>
      )}
      {props.type == "password" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor="#8FA7B2"
            secureTextEntry={showPassword}
          />
          <TouchableOpacity
          style={styles.eyeContainer}
            onPress={() => setShowPassword(showPassword ? false : true)}
          >
            {showPassword && (
              <Ionicons name="eye" size={24} color="#282519" />
            )}
            {!showPassword && (
              <Ionicons name="eye-off" size={24} color="#282519" />
            )}
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    alignItems: "center",
    // maxHeight: 60,
    width: "100%",
    // padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  eyeContainer: {
    height: "100%",
    justifyContent: "center"
  },
  input: {
    flex: 1,
    // backgroundColor: "red",
    height: "100%",
  },
});
