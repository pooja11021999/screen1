import { Ionicons } from "@expo/vector-icons";
import { Select } from "native-base";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const LabelInput = ({
  label,
  formData,
  placeholder,
  fieldname,
  errors,
  options,
  isSelect = false,
  handleChange,
  key,
  isDate,
  setDatePickerVisible,
}) => {
  const renderField = () => {
    if (isSelect) {
      return (
        <Select
          selectedValue={formData[fieldname]}
          onValueChange={(value) => handleChange(fieldname, value)}
          placeholder={placeholder}
          dropdownIcon={
            <Ionicons
              name="chevron-down"
              size={scale(18)}
              color="#ccc"
              style={{ marginRight: scale(5) }}
            />
          }
        >
          {options?.map((option) => (
            <Select.Item key={option} label={option} value={option} />
          ))}
        </Select>
      );
    } else if (isDate) {
      return (
        <TouchableOpacity
          style={styles.dateContainerStyle}
          onPress={() => setDatePickerVisible(true)}
        >
          <Text style={[styles.dateContainerPHStyle,{color:formData.lastContacted ? 'black' : '#ccc'}]}>
            {formData.lastContacted ? formData.lastContacted : placeholder}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={formData[fieldname]}
          onChangeText={(value) => handleChange(fieldname, value)}
          placeholderTextColor="#ccc"
        />
      );
    }
  };
  return (
    <View key={key} style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      {renderField()}
      {errors[fieldname] && (
        <Text style={styles.error}>{errors[fieldname]}</Text>
      )}
    </View>
  );
};

export default LabelInput;

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    top: scale(-8),
    left: scale(10),
    backgroundColor: "#fff",
    zIndex: 1,
    paddingHorizontal: scale(5),
  },
  labelText: {
    color: "#ccc",
  },
  input: {
    borderWidth: scale(1),
    borderColor: "#ccc",
    borderRadius: scale(4),
    padding: scale(8),
  },
  error: {
    color: "red",
    marginBottom: scale(8),
  },
  inputContainer: {
    marginVertical: verticalScale(12),
  },
  dateContainerStyle: {
    height: scale(46),
    borderWidth: scale(1),
    borderColor: "#ccc",
    borderRadius: scale(4),
    justifyContent: "center",
    paddingHorizontal: scale(6),
  },
  dateContainerPHStyle: {
    color: "#ccc",
  },
});
