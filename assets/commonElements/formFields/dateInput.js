import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

const DateInput = ({ formData, item, setDatePickerVisible }) => {
  return (
    <TouchableOpacity
      style={styles.dateContainerStyle}
      onPress={() => setDatePickerVisible(true)}
    >
      <Text
        style={[
          styles.dateContainerPHStyle,
          { color: formData.lastContacted ? "black" : "#ccc" },
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
        paddingHorizontal: scale(6),
        
      },
      dateContainerPHStyle: {
        color: "#ccc",
        paddingLeft: scale(4),
        fontSize: scale(16),
      },

})
