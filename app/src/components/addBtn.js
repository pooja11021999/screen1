import { MaterialIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

const AddBtn = ({ edit, navigation, company }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(
          edit ? "EditCompanyDetailsScreen" : "CompanyDetailsScreen",
          { edit: edit, company: company }
        )
      }
    >
      {edit ? (
        <MaterialIcons name="edit" color="#fff" size={scale(25)} />
      ) : (
        <Octicons name="plus" color="#fff" size={scale(25)} />
      )}
    </TouchableOpacity>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: scale(30),
    bottom: scale(30),
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
  },
});
