import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CheckUserType(props: any) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onClick} style={styles.container}>
      {!props.checked && <View style={styles.radio} />}
      {props.checked && <View style={[styles.radio, styles.radioChecked]} />}
      <Text style={styles.label}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },
  radio: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    borderRadius: 100
  },
  radioChecked: {
    backgroundColor: "#E5764B"
  },
  label: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "Nunito-Black",
  }
});
