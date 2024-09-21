import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../colors.js";
import { globalStyles } from "../../globalStyle/index.js";

const InputField = ({ item, formData, handleChange }) => {
  return (
    <TextInput
      placeholder={item.placeholder}
      placeholderTextColor={Colors.LightGrey}
      value={formData[item.fieldname]}
      onChangeText={(value) => handleChange(item.fieldname, value)}
      style={[styles.textStyle, styles.inputStyle, { width: "100%" }]}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  textStyle: globalStyles.textStyle({ size: 13 }),
  inputStyle: {
    paddingLeft: scale(2),
    paddingVertical: scale(4),
  },
});
