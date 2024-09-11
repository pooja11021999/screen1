import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.searchBtnStyle}>
        <Octicons name="search" color="black" size={scale(18)} />
      </TouchableOpacity>
      <View style={styles.textInputStyle}>
        <TextInput placeholder={placeholder} style={styles.textStyle}></TextInput>
      </View>
    </View>
  );
};

export default SearchBar;
export const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  searchBtnStyle: {
    marginRight: 8,
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  textStyle:{
    fontSize: 16
  }
});
