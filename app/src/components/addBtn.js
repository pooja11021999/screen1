import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../../assets/colors.js/index.js";
import { globalStyles } from "../../../assets/globalStyle/index.js";

const AddBtn = ({ renderIcon, onIconPress, label }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onIconPress()}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  container: {
    elevation: scale(4),
    position: "absolute",
    right: scale(27),
    bottom: scale(27),
    width: scale(54),
    height: scale(54),
    borderRadius: scale(27),
    marginTop: scale(20),
    ...globalStyles.containerStyle({ bgColor: Colors.PureOrange }),
  },
});
