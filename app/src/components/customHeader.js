import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

const CustomHeader = ({
  customLeftContent,
  customRightContent,
  customLeftOnPress,
  customRightOnPress,
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View
          style={styles.leftContentContainer}
          onTouchEnd={customLeftOnPress}
        >
          {customLeftContent || (
            <AntDesign name="arrowleft" size={scale(21)} color="#fff" />
          )}
        </View>
        <View
          style={styles.rightContentContainer}
          onTouchEnd={customRightOnPress}
        >
          {customRightContent()}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00477f",
  },
  content: {
    height: scale(85),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: scale(20),
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
