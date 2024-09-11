import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import AddBtn from "../../components/addBtn";
import Layout from "./_layout";
import ContactCard from "./contactCard";
import Header from "./headerComponent";

export default function DetailsScreen() {
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
