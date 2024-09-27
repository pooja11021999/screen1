import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { HeaderMenu, RatingStars } from "../../../components/index.js";
import { Colors, CustomText, globalStyles } from "../../../helpers/index.js";

const Header = ({ navigation, item, onPressMenu }) => {
  const { companyName, industryType, lastContacted, ratingPer } = item;

  const onLeftBtnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderMenu
        menu={true}
        refresh={true}
        onLeftBtnPress={onLeftBtnPress}
        onPressMenu={onPressMenu}
      />
      <View style={styles.contentContainer}>
        <CustomText text={companyName} externalStyle={styles.textStyle} />
        <RatingStars rating={ratingPer} />

        <View style={styles.detailsStyle}>
          <Text style={styles.detailsText}>{industryType}</Text>

          <View style={styles.lastConnectStyle}>
            <Text style={styles.detailsText}>Last contacted on: </Text>
            <Text style={styles.detailsText}>{lastContacted}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: scale(15),
  },
  detailsStyle: {
    paddingTop: verticalScale(0),
    marginVertical: verticalScale(10),
  },
  contentContainer: {
    marginVertical: verticalScale(20),
  },
  textStyle: {
    ...globalStyles.textStyle({
      size: 20,
      txtColor: Colors.White,
    }),
    marginBottom: scale(4),
  },
  lastConnectStyle: { flexDirection: "row" },

  detailsText: {
    fontFamily: "Roboto_400Regular",
    ...globalStyles.textStyle({ txtColor: Colors.White, size: 12 }),
  },
});
