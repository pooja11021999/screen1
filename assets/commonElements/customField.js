import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Select } from "native-base";
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { scale } from "react-native-size-matters";

import CustomText from "./text";

const CustomField = ({
  item,
  formData,
  setDatePickerVisible,
  handleChange,
  errors,
}) => {
  const renderField = () => {
    if (item.isDate) {
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
    } else if (item.isSelect) {
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
          {item?.options?.map((option) => (
            <Select.Item
              key={option}
              label={option}
              value={option}
              style={styles.textStyle}
            />
          ))}
        </Select>
      );
    } else {
      return item.location ? (
        <GooglePlacesAutocomplete
          placeholder="Enter Location"
          minLength={scale(2)}
          fetchDetails={true}
          onPress={(data, details = null) => {
            handleChange(item.fieldname, data.description);
            console.log(details);
          }}
          onFail={(error) => console.log("error-", error)}
          query={{
            key: "AIzaSyABMwzdIK3U3OaviEpuvUmH5w4bgCaVVVQ",
            language: "en",
          }}
          styles={[styles.googleAutoStyleListView,styles.googleAutoStyleTextInput]}
          debounce={scale(200)}
          renderRightButton={() => (
            <FontAwesome
              name="google"
              size={scale(20)}
              color="#00477f"
              style={styles.valueIconStyle}
            />
          )}
        />
      ) : (
        <TextInput
          placeholder={item.placeholder}
          placeholderTextColor="#ccc"
          value={formData[item.fieldname]}
          onChangeText={(value) => handleChange(item.fieldname, value)}
          style={[styles.textStyle, styles.inputStyle, { width: "100%" }]}
        />
      );
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
  textStyle: {
    color: "black",
    fontSize: scale(16),
  },
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
  dateContainerStyle: {
    height: scale(46),
    justifyContent: "center",
    paddingHorizontal: scale(6),
  },
  dateContainerPHStyle: {
    color: "#ccc",
    paddingLeft: scale(6),
    fontSize: scale(16),
  },
  error: {
    color: "red",
  },
  googleAutoStyleTextInput: {
    fontSize: scale(16),
    height: scale(44),
    borderRadius: scale(5),
    paddingLeft: scale(6),
    marginLeft: scale(0),
    paddingRight: scale(10),
  },
  googleAutoStyleListView: {
    zIndex: scale(999),
    position: "absolute",
    backgroundColor: "#fff",
  },
  selectStyle:{ 
    paddingLeft: scale(5) 
}
});
