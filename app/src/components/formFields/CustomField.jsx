import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors, CustomText, globalStyles } from "../../helpers/index.js";
import { DateInput, DropDown, GooglePlacesInput, InputField } from "./index.js";

const CustomField = ({
  item,
  formData,
  setDatePickerVisible,
  handleChange,
  errors,
  options,
  labelNotRequired,
  customTxtStyle,
  renderRightContent,
  secureTextEntry,
}) => {
  const renderField = () => {
    if (item.isDate) {
      return (
        <DateInput
          item={item}
          formData={formData}
          setDatePickerVisible={setDatePickerVisible}
          customTxtStyle={customTxtStyle}
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
            customTxtStyle={customTxtStyle}
            secureTextEntry={secureTextEntry}
          />
        );
      }
    }
  };

  return (
    <View style={styles.cardStyle}>
      {!labelNotRequired && (
        <View style={styles.labelContainerStyle}>
          <View style={styles.leftLabelContent}>
            <CustomText text={item.label} externalStyle={styles.textStyle} />
            <CustomText
              text={item.required ? "*" : ""}
              externalStyle={[styles.textStyle, styles.requiredStyle]}
            />
          </View>
        </View>
      )}

      <View style={styles.valueContainerStyle}>
        <View
          style={[
            styles.leftValueContent,
            { width: renderRightContent ? "90%" : "100%" },
          ]}
        >
          {renderField()}
        </View>
        <View
          style={[
            styles.rightValueContent,
            { width: renderRightContent ? "8%" : "0%" },
          ]}
        >
          {renderRightContent && renderRightContent()}
        </View>
      </View>
      {errors[item.fieldname] && (
        <Text style={styles.error}>{errors[item.fieldname]}</Text>
      )}
      <View
        style={[
          styles.itemSepComStyle,
          {
            backgroundColor: errors[item.fieldname]
              ? Colors.Red
              : Colors.LightGrey,
          },
        ]}
      />
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
    gap: scale(3),
  },
  inputStyle: {
    borderRadius: scale(5),
    paddingLeft: scale(10),
    paddingVertical: scale(4),
  },
  error: globalStyles.textStyle({ txtColor: Colors.Red, size: 12 }),
  textStyle: {
    ...globalStyles.textStyle({ txtColor: Colors.DarkGray, size: 14 }),
    fontWeight: "500",
  },
  requiredStyle: {
    color: Colors.Red,
  },
  itemSepComStyle: {
    height: scale(1),
    marginBottom: scale(9),
  },
  valueContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftValueContent: {},
  rightValueContent: {
    width: "8%",
  },
});
