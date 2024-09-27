import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors, globalStyles } from "../../helpers";

const CommonHeader = ({
  leftButton = "menu",
  rightButtonContent,
  title,
  navigation,
} = {}) => {
  const handleLeftButtonPress = () => {
    return leftButton === "menu"
      ? navigation.toggleDrawer()
      : navigation.goBack();
  };

  return (
    <View style={styles.main}>
      <View style={styles.leftButtonContainer}>
        <TouchableOpacity onPress={() => handleLeftButtonPress()}>
          {leftButton === "menu" ? (
            <Entypo name="menu" size={scale(22)} color={Colors.White} />
          ) : (
            <AntDesign name="arrowleft" size={scale(21)} color={Colors.White} />
          )}
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>

      {Boolean(rightButtonContent) && (
        <View style={styles.rightButtonContainer}>
          {rightButtonContent?.map((item) => (
            <TouchableOpacity onPress={item.ButtonPress}>
              {item.Button()}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  main: {
    height: scale(54),
    flexDirection: "row",
    backgroundColor: Colors.DarkBlue,
    alignItems: "center",
    paddingHorizontal: scale(15),
  },
  leftButtonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  titleStyle: globalStyles.textStyle({
    txtColor: Colors.White,
  }),
  titleContainer: {
    marginLeft: scale(10),
  },
  rightButtonContainer: {
    flexDirection: "row",
  },
});
