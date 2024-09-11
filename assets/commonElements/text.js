import React from "react";
import { StyleSheet, Text } from "react-native";
import { scale } from "react-native-size-matters";

const CustomText = ({ text, externalStyle }) => {
  return <Text style={[styles.textStyle, externalStyle]}>{text}</Text>;
};

export default CustomText;
export const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: scale(15),
  },
});
