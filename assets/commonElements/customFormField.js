import { Ionicons } from "@expo/vector-icons";
import { Select } from "native-base";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const CustomFormField = ({
  label,
  requiredMsg,
  pattern,
  patternMsg,
  placeholder,
  fieldname,
  control,
  errors,
  options,
  isSelect = false,
  selectedValue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <Controller
        control={control}
        name={fieldname}
        rules={{
          required: requiredMsg ? { value: true, message: requiredMsg } : false,
          pattern: pattern ? { value: pattern, message: patternMsg } : {},
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            {isSelect ? (
              <Select
                selectedValue={value || selectedValue}
                onValueChange={(itemValue) => onChange(itemValue)}
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
            ) : (
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value || selectedValue}
                placeholderTextColor="#ccc"
              />
            )}
            {errors[fieldname] && (
              <Text style={styles.error}>{errors[fieldname]?.message}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default CustomFormField;

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    top: -8,
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
  container: {
    marginVertical: verticalScale(7),
  },
});
