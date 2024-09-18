import { Ionicons } from "@expo/vector-icons";
import { Select } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const DropDown = ({ handleChange, item, formData, options }) => {
  return (
    <Select
      selectedValue={formData[item.fieldname]}
      onValueChange={(value) => handleChange(item.fieldname, value)}
      style={[styles.textStyle, styles.selectStyle]}
      placeholder={item.placeholder}
      placeholderTextColor="#ccc"
      width={scale(300)}
      borderWidth={scale(0)}
      height={scale(36)}
      dropdownIcon={
        <Ionicons name="chevron-down-outline" color="black" size={scale(20)} />
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
  textStyle: {
    color: "black",
    fontSize: scale(16),
  },
  selectStyle: {
    paddingLeft: scale(2),
    paddingVertical: scale(0),
  },
});
