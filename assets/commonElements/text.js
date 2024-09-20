import React from "react";
import { Text } from "react-native";

import { globalStyles } from "../globalStyle";

const CustomText = ({ text, externalStyle }) => {
  return <Text style={[globalStyles.textStyle, externalStyle]}>{text}</Text>;
};

export default CustomText;
