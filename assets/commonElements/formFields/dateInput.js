import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../colors.js";

const DateInput = ({ formData, item, setDatePickerVisible }) => {
  return (
    <TouchableOpacity
      style={styles.dateContainerStyle}
      onPress={() => setDatePickerVisible(true)}
    >
      <Text
        style={[
          styles.dateContainerPHStyle,
          { color: formData.lastContacted ? Colors.Black : Colors.LightGrey },
        ]}
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
  dateContainerPHStyle: {
    color: Colors.LightGrey,
    paddingLeft: scale(2),
    fontSize: scale(16),
  },
});
