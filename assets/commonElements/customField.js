import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { scale } from "react-native-size-matters";

import DateInput from "./formFields/dateInput";
import DropDown from "./formFields/dropDown";
import GooglePlacesInput from "./formFields/googlePlacesInput";
import CustomText from "./text";

const CustomField = ({
  item,
  formData,
  setDatePickerVisible,
  handleChange,
  errors,
  options
}) => {
  const renderField = () => {
    if (item.isDate) {
      return (
        <DateInput
          item={item}
          formData={formData}
          setDatePickerVisible={setDatePickerVisible}
        />
      );
    } else if (item.isSelect) {
      return (
        <DropDown item={item} formData={formData} handleChange={handleChange} options={options}/>
      );
    } else {
      if (item.location) {
        return (
          <GooglePlacesInput
            item={item}
            handleChange={handleChange}
            formData={formData}
          />
        );
      } else {
        return (
          <TextInput
            placeholder={item.placeholder}
            placeholderTextColor="#ccc"
            value={formData[item.fieldname]}
            onChangeText={(value) => handleChange(item.fieldname, value)}
            style={[styles.textStyle, styles.inputStyle, { width: "100%" }]}
          />
        );
      }
    }
  };

  return (
    <View style={styles.cardStyle}>
      <View style={styles.labelContainerStyle}>
        <View style={styles.leftLabelContent}>
          <CustomText text={item.label} externalStyle={styles.textStyle} />
          <CustomText
            text={item.required && "*"}
            externalStyle={styles.textStyle}
          />
        </View>
        {item.isSelect && (
          <View style={styles.rightLabelContent}>
            <Ionicons
              name="chevron-down-outline"
              color="black"
              size={scale(20)}
            />
          </View>
        )}
      </View>

      <View styles={styles.valueContainerStyle}>
        <View style={styles.leftValueContent}>{renderField()}</View>
      </View>

      <View style={styles.itemSepComStyle} />

      {errors[item.fieldname] && (
        <Text style={styles.error}>{errors[item.fieldname]}</Text>
      )}
    </View>
  );
};

export default CustomField;

const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: scale(8),
  },
  labelContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: scale(8),
  },
  leftLabelContent: {
    flexDirection: "row",
  },
  valueIconStyle: {
    marginLeft: scale(10),
    alignSelf: "center",
  },
  inputStyle: {
    height: scale(44),
    borderRadius: scale(5),
    paddingLeft: scale(10),
  },
  itemSepComStyle: {
    height: scale(1),
    backgroundColor: "#ccc",
  },
  error: {
    color: "red",
  },
  textStyle: {
    color: "black",
    fontSize: scale(16),
  },
});
