import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../helpers/index";

const HeaderMenu = ({ menu, refresh, onLeftBtnPress, onPressMenu }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftIcons} onPress={onLeftBtnPress}>
        <AntDesign name="arrowleft" size={scale(21)} color={Colors.White} />
      </TouchableOpacity>
      <View style={styles.rightIcons}>
        {refresh && (
          <FontAwesome
            name="rotate-right"
            size={scale(17)}
            color={Colors.White}
          />
        )}
        {menu && (
          <TouchableOpacity onPress={onPressMenu}>
            <Entypo
              name="dots-three-vertical"
              size={scale(17)}
              color={Colors.White}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
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
