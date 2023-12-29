import React, { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import CheckUserType from "../components/CheckUserType";

export default function RegisterChoise() {
    const [selectedType, setSelectedType] = useState<number>(1);
    const handleChoiseUserType = () => {
        
    }
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>

            <Text style={styles.title}>Você é:</Text>
        </View>
      <View style={styles.checkContainer}>
        <CheckUserType onClick={() => setSelectedType(1)} checked={selectedType == 1 ? true : false} text="Corretor" />
        <CheckUserType onClick={() => setSelectedType(2)} checked={selectedType == 2 ? true : false} text="Imobiliária" />
        <CheckUserType onClick={() => setSelectedType(3)} checked={selectedType == 3 ? true : false} text="Construtora" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FBB752",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  titleContainer: {
    justifyContent: "flex-end",
    flex: 0.5,
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontFamily: "Nunito-Black",
    justifyContent: "center",
    color: "#fff"
  },
  buttonContainer: {
    flex: 0.5,
    width: "100%"
  },
  button: {
    backgroundColor: "#E5764B",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Nunito-Bold",
    fontSize: Platform.OS == "ios" ? 17 : 23,
  },
  checkContainer: {
    flex: 1,
    gap: 40,
    justifyContent: "center",
    width: "100%",
    marginBottom: 5
  },
});
