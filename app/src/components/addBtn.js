import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

const AddBtn = ({ renderIcon, onIconPress, label }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onIconPress()}>
      {renderIcon()}
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  container: {
    elevation: scale(4),
    backgroundColor: "#FF5F1F",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: scale(30),
    bottom: scale(30),
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    marginTop: scale(20),
  },
});
