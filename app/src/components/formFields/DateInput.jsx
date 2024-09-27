import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors, globalStyles } from "../../helpers/index";

const DateInput = ({ formData, item, setDatePickerVisible }) => {
  return (
    <TouchableOpacity
      style={styles.dateContainerStyle}
      onPress={() => setDatePickerVisible(true)}
    >
      <Text
        style={{
          ...globalStyles.textStyle({
            txtColor: formData.lastContacted ? Colors.Black : Colors.LightGrey,
            size: 12,
          }),
          paddingLeft: scale(2),
        }}
      >
        {formData.lastContacted ? formData.lastContacted : item.placeholder}
      </Text>
    </TouchableOpacity>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  dateContainerStyle: {
    height: scale(36),
    justifyContent: "center",
  },
});
