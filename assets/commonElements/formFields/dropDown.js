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
      width={scale(300)}
      borderWidth={scale(0)}
      dropdownIcon={<></>}
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
    paddingLeft: scale(5),
  },
});
