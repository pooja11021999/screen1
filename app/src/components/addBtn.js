import React from "react";
import { StyleSheet, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

const AddBtn = () => {
  return (
    <View style={styles.container}>
      <Octicons name="plus" color="#fff" size={25}/>
    </View>
  );
};

export default AddBtn;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 30,
    bottom: 55,
    width: 50,
    height: 50,
    borderRadius:25
  },
});
