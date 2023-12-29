import React from "react";
import { Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login } from "./pages";
import Presentation from "./pages/Presentation";
import RegisterChoise from "./pages/RegisterChoise";

const Stack = createStackNavigator();

function AppStack(props: any) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerMode: "float",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        headerBackTitleVisible: false,
        // headerLeft: (props) => (
        //   <View>
        //     <Text>TEste</Text>
        //   </View>
        // )
        // header: (): any => {
        //   <Header />;
        // },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function Telas(props: any) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // header: ({ navigation, scene }: any): any => {
        //   <Header navigation={navigation} scene={scene} />;
        // },
        // null,
      }}
      initialRouteName="RegisterChoise"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Presentation"
        component={Presentation}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterChoise" component={RegisterChoise} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
