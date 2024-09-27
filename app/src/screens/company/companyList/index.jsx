import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

import {
  AddButton,
  CommonHeader,
  SearchBar,
} from "../../../components/index.js";
import { DataContext } from "../../../context/DataContextProvider.js";
import { Colors, globalStyles } from "../../../helpers/index.js";
import CompanyCard from "./CompanyCard.jsx";

const CompanyList = ({ navigation }) => {
  const { data, setData } = useContext(DataContext);

  const rightButtons = [
    {
      Button: () => (
        <MaterialCommunityIcons
          name="sort-variant"
          color={Colors.White}
          size={scale(23)}
          style={{ marginRight: scale(12) }}
        />
      ),
      ButtonPress: () => console.log("sorting clicked"),
    },
    {
      Button: () => (
        <MaterialIcons
          name="filter-list"
          color={Colors.White}
          size={scale(23)}
          style={styles.filterIcon}
        />
      ),
      ButtonPress: () => console.log("filter clicked"),
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const getDetails = (item) => {
    navigation.navigate("CompanyDetailsScreen", { item });
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleIconPress = () => {
    navigation.navigate("CompanyDetailsForm", {});
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
      <CommonHeader
        title="Company"
        leftButton="menu"
        navigation={navigation}
        rightButtonContent={rightButtons}
      />
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder="Search" handleSearch={handleSearch} />
      </View>
      <FlatList
        data={searchQuery ? filteredData : data.InitialCompanyData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <CompanyCard
            item={item}
            navigation={navigation}
            getDetails={getDetails}
          />
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
