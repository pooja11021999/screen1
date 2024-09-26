import { Octicons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../../../assets/colors/index.js";
import { globalStyles } from "../../../../assets/globalStyle/index.jsx";
import AddButton from "../../components/AddButton.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import { DataContext } from "../../context/DataContextProvider.js";
import Card from "./Card.jsx";

const CompanyList = ({ navigation }) => {
  const { data, setData } = useContext(DataContext);

  const [searchQuery, setSearchQuery] = useState("");

  const getDetails = (item) => {
    navigation.navigate("DetailScreen", { item });
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleIconPress = () => {
    navigation.navigate("CompanyDetailsScreen", {});
  };

  console.log("data-", data);
  const filteredData = data?.InitialCompanyData.filter(
    (item) =>
      item.companyName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      item.city?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder="Search" handleSearch={handleSearch} />
      </View>
      <FlatList
        data={searchQuery ? filteredData : data.InitialCompanyData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Card item={item} navigation={navigation} getDetails={getDetails} />
        )}
        ListEmptyComponent={<Text>No companies found.</Text>}
      />
      <AddButton
        onIconPress={handleIconPress}
        renderIcon={() => (
          <Octicons name="plus" color={Colors.White} size={scale(22)} />
        )}
      />
    </View>
  );
};

export default CompanyList;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    ...globalStyles.containerStyle,
  },
  searchBarContainer: {
    borderBottomColor: Colors.LightGrey,
    borderBottomWidth: scale(1),
  },
});
