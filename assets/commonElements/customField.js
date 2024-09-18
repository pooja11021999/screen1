import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

import DateInput from "./formFields/dateInput";
import DropDown from "./formFields/dropDown";
import GooglePlacesInput from "./formFields/googlePlacesInput";
import InputField from "./formFields/inputField";
import CustomText from "./text";
const CustomField = ({
  item,
  formData,
  setDatePickerVisible,
  handleChange,
  errors,
  options,
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
        <DropDown
          item={item}
          formData={formData}
          handleChange={handleChange}
          options={options}
        />
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
          <InputField
            formData={formData}
            item={item}
            handleChange={handleChange}
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
      </View>

      <View styles={styles.valueContainerStyle}>
        <View style={styles.leftValueContent}>{renderField()}</View>
      </View>

      {errors[item.fieldname] && (
        <Text style={styles.error}>{errors[item.fieldname]}</Text>
      )}
    </View>
  );
};

export default CustomField;

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: scale(8),
  },
  labelContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftLabelContent: {
    flexDirection: "row",
  },
  valueIconStyle: {
    marginLeft: scale(10),
    alignSelf: "center",
  },
  inputStyle: {
    borderRadius: scale(5),
    paddingLeft: scale(10),
    paddingVertical: scale(4),
  },
  error: {
    color: "red",
  },
  textStyle: {
    color: "black",
    fontSize: scale(16),
  },
});
