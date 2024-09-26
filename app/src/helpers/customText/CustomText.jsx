import React from "react";
import { Text } from "react-native";

const CustomText = ({ text, externalStyle }) => {
  return <Text style={externalStyle}>{text}</Text>;
};

export default CustomText;
