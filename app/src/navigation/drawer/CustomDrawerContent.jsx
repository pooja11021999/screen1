import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors, globalStyles } from "../../helpers/index.js";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePic}></View>
        <View style={styles.infoContainer}>
          <Text style={styles.NameStyle}>Pooja Gaikwad</Text>
          <Text style={styles.mailStyle}>gaikwad@gmail.com</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create({
  profileContainer: {
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.LightGrey,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scale(17),
    paddingHorizontal: scale(18),
    gap: scale(13),
  },
  profilePic: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(30),
    backgroundColor: Colors.LimeGreen,
  },
  infoContainer: {},
  NameStyle: globalStyles.textStyle({ size: 15 }),
  mailStyle: globalStyles.textStyle({ size: 11 }),
});
