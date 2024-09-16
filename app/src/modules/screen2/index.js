import { Octicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";
import { connect } from "react-redux";

import AddBtn from "../../components/addBtn";
import SearchBar from "../../components/searchBar";
import Card from "./card";

const CompanyList = ({ navigation, companies }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const getDetails = (item) => {
    navigation.navigate("DetailScreen", { item });
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleIconPress = () => {
    navigation.navigate("Form", {});
  };

  const filteredData = companies.filter(
    (item) =>
      item.companyName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      item.city?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#00477f" style="light" />
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder="Search" handleSearch={handleSearch} />
      </View>
      <FlatList
        data={searchQuery ? filteredData : companies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card item={item} navigation={navigation} getDetails={getDetails} />
        )}
      />
      <AddBtn
        onIconPress={handleIconPress}
        renderIcon={() => (
          <Octicons name="plus" color="#fff" size={scale(25)} />
        )}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  companies: state.companiesData.companies,
});

export default connect(mapStateToProps)(CompanyList);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: scale(1),
  },
});
