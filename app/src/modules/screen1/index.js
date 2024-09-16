import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

import AddBtn from "../../components/addBtn";
import Layout from "./_layout";
import ContactCard from "./contactCard";
import Header from "./headerComponent";

export default function DetailsScreen({ navigation, route }) {
  const { item } = route.params;

  const handleIconPress = () => {
    navigation.navigate("EditCompanyDetailsScreen", {
      edit: true,
      company: item,
    });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#00477f" style="light" />
      <View style={styles.firstBoxStyle}>
        <Header navigation={navigation} item={item} />
      </View>
      <View style={styles.secondBoxStyle}>
        <ContactCard />
        <Layout company={item} />
      </View>
      <AddBtn
        onIconPress={handleIconPress}
        renderIcon={() => (
          <MaterialIcons name="edit" color="#fff" size={scale(25)} />
        )}
      />
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
