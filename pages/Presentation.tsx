import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { SvgUri } from "react-native-svg";
import Slider from "../components/icons/Slider";
import Arrow from "../components/icons/Arrow";
import { StatusBar } from "expo-status-bar";

export default function Presentation(props: any) {
  useEffect(() => {}, []);
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Você poderá acompanhar o seu empreendimento/saldo
          </Text>
          <Text style={styles.subtitle}>
            Procure por um empreendimento e controle suas finanças
          </Text>
        </View>
        <View style={styles.footerContent}>
          <Slider />
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Arrow style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--Back-Background, #F2F3F5)",
    paddingHorizontal: 5,
    marginTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    width: "100%",
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  footerContent: {
    width: "100%",
    height: 70,
    paddingHorizontal: 20,
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#282519",
    fontSize: Platform.OS == "ios" ? 40 : 35,
    lineHeight: Platform.OS == "ios" ? 50 : 40,
    fontFamily: "Nunito-Black",
  },
  subtitle: {
    lineHeight: Platform.OS == "ios" ? 35 : 30,
    fontFamily: "Nunito-Regular",
    fontSize: Platform.OS == "ios" ? 25 : 21,
  },
  sliderIcon: {
    backgroundColor: "purple",
    height: "100%",
    width: 50,
    flex: 1,
  },
  arrowIcon: {
    backgroundColor: "#282519",
    height: 70,
    width: 70,
    padding: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scaleX: -1 }],
  },
});
