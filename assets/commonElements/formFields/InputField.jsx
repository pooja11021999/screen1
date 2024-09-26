import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../colors/index.js";
import { globalStyles } from "../../globalStyle/index.jsx";

const InputField = ({
  item,
  formData,
  handleChange,
  customTxtStyle,
  secureTextEntry,
}) => {
  return (
    <TextInput
      placeholder={item.placeholder}
      placeholderTextColor={Colors.LightGrey}
      value={formData[item.fieldname]}
      onChangeText={(value) => handleChange(item.fieldname, value)}
      style={[
        customTxtStyle ? customTxtStyle : styles.textStyle,
        styles.inputStyle,
        { width: "100%" },
      ]}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  textStyle: globalStyles.textStyle({ size: 13 }),
  inputStyle: {
    paddingLeft: scale(2),
    paddingVertical: scale(4),
    fontFamily: "Roboto_400Regular",
  },
});
