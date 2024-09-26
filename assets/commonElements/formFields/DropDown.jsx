import { Ionicons } from "@expo/vector-icons";
import { Select } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../colors/index.js";
import { globalStyles } from "../../globalStyle/index.jsx";

const DropDown = ({ handleChange, item, formData, options }) => {
  return (
    <Select
      selectedValue={formData[item.fieldname]}
      onValueChange={(value) => handleChange(item.fieldname, value)}
      style={[globalStyles.textStyle({ size: 13 }), styles.selectStyle]}
      placeholder={item.placeholder}
      placeholderTextColor={Colors.LightGrey}
      width={scale(300)}
      borderWidth={scale(0)}
      height={scale(36)}
      dropdownIcon={
        <Ionicons
          name="chevron-down-outline"
          color={Colors.Black}
          size={scale(20)}
        />
      }
    >
      {options?.map((option) => (
        <Select.Item
          key={option}
          label={option}
          value={option}
          style={styles.textStyle}
        />
      ))}
    </Select>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  selectStyle: {
    paddingLeft: scale(2),
    paddingVertical: scale(0),
  },
  textStyle: globalStyles.textStyle({ size: 13 }),
});
