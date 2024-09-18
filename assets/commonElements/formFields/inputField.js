import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { scale } from "react-native-size-matters";

const InputField = ({ item, formData, handleChange }) => {
  return (
    <TextInput
      placeholder={item.placeholder}
      placeholderTextColor="#ccc"
      value={formData[item.fieldname]}
      onChangeText={(value) => handleChange(item.fieldname, value)}
      style={[styles.textStyle, styles.inputStyle, { width: "100%" }]}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    fontSize: scale(16),
  },
  inputStyle: {
    paddingLeft: scale(2),
    paddingVertical: scale(4),
  },
});
