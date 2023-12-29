import React from "react";
import { useEffect, useCallback, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, loadAsync } from 'expo-font';


import Telas from "./Screens";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded]: any = useFonts({
    'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
    'Nunito-BlackItalic': require('./assets/fonts/Nunito-BlackItalic.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-BoldItalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraBoldItalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLight': require('./assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-ExtraLightItalic': require('./assets/fonts/Nunito-ExtraLightItalic.ttf'),
    'Nunito-Italic': require('./assets/fonts/Nunito-Italic.ttf'),
    'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
    'Nunito-LightItalic': require('./assets/fonts/Nunito-LightItalic.ttf'),
    'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
    'Nunito-MediumItalic': require('./assets/fonts/Nunito-MediumItalic.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-SemiBoldItalic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf'),
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  useEffect(() => {
    const fetchData = async () => {
      await loadAsync(fontsLoaded);
    };

    async function prepare() {
      setAppIsReady(true);
    }

    fetchData();
    prepare();
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady || fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000);
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady && !fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Telas />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
