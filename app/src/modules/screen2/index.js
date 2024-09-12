import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

import AddBtn from "../../components/addBtn";
import SearchBar from "../../components/searchBar";
import Card from "./card";

const CompanyList = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const data = [
    { name: "xyz", city: "No City Name", status: "Active" },
    { name: "12Grids", city: "Mumbai", status: "Inactive" },
    { name: "Cipla Ltd", city: "Bengaluru", status: "Inactive" },
    { name: "NASCOM", city: "Hyderabad", status: "Active" },
    { name: "NA USA 5@#", city: "Hyderabad", status: "New" },
    { name: "Nippon Technologies", city: "Nashik", status: "Inactive" },
    { name: "HAL Pvt Ltd", city: "No City Name", status: "Inactive" },
    {
      name: "Reliance Electric Service",
      city: "No City Name",
      status: "Inactive",
    },
    { name: "Arihant Group", city: "No City Name", status: "Inactive" },
    { name: "Aa dd", city: "Birmingham", status: "Active" },
    { name: "xyz", city: "No City Name", status: "Active" },
    { name: "12Grids", city: "Mumbai", status: "Inactive" },
    { name: "Cipla Ltd", city: "Bengaluru", status: "Inactive" },
    { name: "NASCOM", city: "Hyderabad", status: "Active" },
    { name: "NA USA 5@#", city: "Hyderabad", status: "New" },
  ];

  const getDetails = (item) => {
    navigation.navigate("DetailScreen", { item });
  };

  const handleSearch = (text) => {
    setSearchQuery(text)
  };

  const filteredData = data.filter((item)=> item.name.toLowerCase().includes(searchQuery.toLowerCase())||item.city.toLowerCase().includes(searchQuery.toLowerCase()))


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#00477f" style="light" />
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder="Search" handleSearch={handleSearch}/>
      </View>
      <FlatList
        data={searchQuery ? filteredData : data}
        renderItem={({ item }) => (
          <Card item={item} navigation={navigation} getDetails={getDetails} />
        )}
        ItemSeparatorComponent={<View style={styles.itemSepComStyle} />}
      />
      <AddBtn />
    </SafeAreaView>
  );
};

export default CompanyList;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSepComStyle: {
    backgroundColor: "#D3D3D3",
    height: scale(1),
  },
  searchBarContainer: {  
    borderBottomColor: "#D3D3D3", 
    borderBottomWidth: scale(1) 
  },
});
