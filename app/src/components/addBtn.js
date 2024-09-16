import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

const AddBtn = ({ renderIcon, onIconPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onIconPress()}>
      {renderIcon()}
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
