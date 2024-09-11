import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Layout from "./app/_layout";
import AddBtn from "./app/src/components/addBtn";
import ContactCard from "./app/src/modules/contactCard";
import Header from "./app/src/modules/headerComponent";

export default function App() {
  let data = {
    title: "xyz",
    indType: "Industry type is not specified",
    lastConnect: "15-08-2024",
    ratingPer: 4,
  };

  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#00477f" style="light" />
      <View style={styles.firstBoxStyle}>
        <Header data={data} />
      </View>
      <View style={styles.secondBoxStyle}>
        <ContactCard />
        <Layout />
      </View>
      <AddBtn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstBoxStyle: {
    flex: 1,
    backgroundColor: "#00477f",
  },
  secondBoxStyle: { flex: 2 },
});
