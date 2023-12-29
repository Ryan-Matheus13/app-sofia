import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Input from "../components/Input";
import Door from "../components/icons/Door";
import Cross from "../components/icons/Cross";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

export default function Login({ navigation }: any) {
  const [username, setUsername] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  useEffect(() => {
    console.log("Login");
  });
  return (
    <>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                onChangeText={(text: any) => setUsername(text)}
                value={username}
                placeholder={"Email / Nome do Usuário"}
                type={"email-address"}
              />
              <Input
                onChangeText={(text: any) => setPassword(text)}
                value={password}
                placeholder={"Senha"}
                type={"password"}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Text style={styles.linkContainer}>
                *esqueceu sua <Text style={styles.link}>senha</Text>{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("App");
                }}
              >
                <Door style={styles.entryButton} />
              </TouchableOpacity>
            </View>
            <View style={styles.registerContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("App");
                }}
              >
                <Cross style={styles.registerButton} />
              </TouchableOpacity>
              <Text style={styles.registerText}>
                ainda não é <Text style={styles.link}>Cadastrado</Text>?
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    background: "var(--Back-Background, #F2F3F5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: Constants.statusBarHeight,
  },
  inputContainer: {
    width: "100%",
    gap: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 25,
    // backgroundColor: "red",
    width: "100%",
    paddingHorizontal: 50,
  },
  logo: {
    objectFit: "contain",
    width: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
    // marginHorizontal: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  linkContainer: {
    color: "#747474",
    fontSize: Platform.OS === "ios" ? 14 : 12,
  },
  link: {
    color: "#282519",
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
  },
  entryButton: {
    backgroundColor: "#FBB752",
    height: 70,
    width: 70,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    backgroundColor: "#282519",
    height: 70,
    width: 70,
    padding: 25,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  registerContainer: {
    alignItems: "center",
    gap: 15,
    flex: 1,
    paddingTop: 25,
  },
  registerText: {
    fontSize: 20,
  },
});
