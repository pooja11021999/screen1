import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { Text, TextInput } from "react-native";
import StackNavigation from "./app/src/navigation";
import { store } from "./app/src/redux/store";

const App = () => {
  useEffect(() => {
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    if (TextInput.defaultProps == null) TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StatusBar animated={true} backgroundColor="#00477f" style="light" />
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
    backgroundColor: "#fff",
  },
});
