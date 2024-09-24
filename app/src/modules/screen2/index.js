import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";
import { connect } from "react-redux";

import { Colors } from "../../../../assets/colors.js";
import AddBtn from "../../components/addBtn";
import SearchBar from "../../components/searchBar";
import Card from "./card";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles } from "../../../../assets/globalStyle/index.js";

const CompanyList = ({ navigation, companies }) => {
  const insets = useSafeAreaInsets();

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

  const filteredData = companies.filter(
    (item) =>
      item.companyName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      item.city?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder="Search" handleSearch={handleSearch} />
      </View>
      <FlatList
        data={searchQuery ? filteredData : companies}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Card item={item} navigation={navigation} getDetails={getDetails} />
        )}
      />
      <AddBtn
        onIconPress={handleIconPress}
        renderIcon={() => (
          <Octicons name="plus" color={Colors.White} size={scale(22)} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  companies: state.companiesData.companies,
});

export default connect(mapStateToProps)(CompanyList);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    ...globalStyles.containerStyle,
  },
  searchBarContainer: {
    borderBottomColor: Colors.LightGrey,
    borderBottomWidth: scale(1),
  },
});
