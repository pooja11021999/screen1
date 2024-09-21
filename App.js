import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import StackNavigation from "./app/src/navigation";
import { store } from "./app/src/redux/store";
import { Colors } from "./assets/colors.js";

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
      <Provider store={store}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.DarkBlue}
          style="light"
        />
        <NativeBaseProvider>
          <StackNavigation />
        </NativeBaseProvider>
      </Provider>
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
