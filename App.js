import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

import DataContextProvider from "./app/src/context/DataContextProvider.js";
import AppNavigation from "./app/src/navigation/index.jsx";

const App = () => {
  const [fontsLoaded, fontsError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  if (!fontsLoaded && fontsError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <DataContextProvider>
        <StatusBar
          animated={true}
          backgroundColor={Colors.DarkBlue}
          style="light"
        />
        <NativeBaseProvider>
          <GestureHandlerRootView>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </GestureHandlerRootView>
        </NativeBaseProvider>
      </DataContextProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
