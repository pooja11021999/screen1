import { Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

const AddBtn = () => {
  return (
    <View style={styles.container}>
      <Octicons name="plus" color="#fff" size={scale(25)} />
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
    right: scale(30),
    bottom: scale(30),
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
  },
});
