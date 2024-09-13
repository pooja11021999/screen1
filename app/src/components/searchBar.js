import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const SearchBar = ({ placeholder, handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchTextChange = (text) => {
    setQuery(text);
    handleSearch(text);
  };

  return (
    <View style={styles.main}>
      <Octicons
        name="search"
        color="black"
        size={scale(18)}
        style={styles.searchBtnStyle}
      />
      <View style={styles.textInputStyle}>
        <TextInput
          placeholder={placeholder}
          style={styles.textStyle}
          value={query}
          onChangeText={handleSearchTextChange}
        ></TextInput>
      </View>
    </View>
  );
};

export default SearchBar;

export const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(15),
    alignItems: "center",
  },
  searchBtnStyle: {
    marginRight: scale(8),
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: verticalScale(2),
    paddingHorizontal: scale(5),
  },
  textStyle: {
    fontSize: scale(16),
  },
});
