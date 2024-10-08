import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../helpers/index";

const CustomHeader = ({
  customLeftContent,
  customRightContent,
  customLeftOnPress,
  customRightOnPress,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={styles.leftContentContainer}
          onTouchEnd={customLeftOnPress}
        >
          {customLeftContent || (
            <AntDesign name="arrowleft" size={scale(21)} color={Colors.White} />
          )}
        </View>
        <View
          style={styles.rightContentContainer}
          onTouchEnd={customRightOnPress}
        >
          {customRightContent()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DarkBlue,
  },
  content: {
    padding: scale(18),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  leftContentContainer: {
    flex: 1,
  },
  rightContentContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default CustomHeader;
