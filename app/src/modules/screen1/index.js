import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import AddBtn from "../../components/addBtn";
import Layout from "./_layout";
import ContactCard from "./contactCard";
import Header from "./headerComponent";

export default function DetailsScreen({ navigation, route }) {
  let data = {
    title: "xyz",
    indType: "Industry type is not specified",
    lastConnect: "15-08-2024",
    ratingPer: 4,
  };

  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#00477f" style="light" />
      <View style={styles.firstBoxStyle}>
        <Header data={data} navigation={navigation} item={item} />
      </View>
      <View style={styles.secondBoxStyle}>
        <ContactCard />
        <Layout company={item} />
      </View>
      <AddBtn edit={true} navigation={navigation} company={item} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  firstBoxStyle: {
    flex: 1,
    backgroundColor: "#00477f",
  },
  secondBoxStyle: { flex: 2 },
});
