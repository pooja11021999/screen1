import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

const HeaderMenu = ({ menu, refresh }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIcons}>
        <AntDesign name="arrowleft" size={scale(21)} color="#fff" />
      </View>
      <View style={styles.rightIcons}>
        {refresh && (
          <FontAwesome name="rotate-right" size={scale(17)} color="#fff" />
        )}
        {menu && (
          <Entypo
            name="dots-three-vertical"
            size={scale(17)}
            color="#fff"
            style={styles.iconStyle}
          />
        )}
      </View>
    </View>
  );
};

export default HeaderMenu;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: scale(10),
  },
  rightIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftIcons: {
    alignItems: "center",
  },
  iconStyle: { marginLeft: scale(20) },
});
