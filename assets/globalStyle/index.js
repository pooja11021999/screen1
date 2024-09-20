import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../colors.js";

export const globalStyles = StyleSheet.create({
  textStyle: ({ txtColor = Colors.Black, size = 16 } = {}) => ({
    color: txtColor,
    fontSize: scale(size),
    fontFamily: "Roboto",
  }),
  containerStyle: ({ bgColor = Colors.White } = {}) => ({
    flex: 1,
    backgroundColor: bgColor,
    alignItems: "center",
    justifyContent: "center",
  }),
});
