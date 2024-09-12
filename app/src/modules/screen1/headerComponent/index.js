import React from "react";
import { StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import CustomText from "../../../../../assets/commonElements/text";
import HeaderMenu from "../../../components/header";
import RatingStars from "../../../components/ratingStars";

const Header = ({ data, navigation, item }) => {
  const { title, indType, lastConnect, ratingPer } = data;
  const onLeftBtnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderMenu menu={true} refresh={true} onLeftBtnPress={onLeftBtnPress} />
      <View style={styles.contentContainer}>
        <CustomText text={item?.name} externalStyle={styles.textStyle} />
        <RatingStars rating={ratingPer} />

        <View style={styles.detailsStyle}>
          <CustomText text={indType} />

          <View style={styles.lastConnectStyle}>
            <CustomText text="Last contacted on: " />
            <CustomText text={lastConnect} />
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
    paddingVertical: verticalScale(6),
  },
  detailsStyle: {
    paddingTop: verticalScale(10),
    marginTop: verticalScale(20),
  },
  contentContainer: {
    paddingTop: verticalScale(15),
  },
  textStyle: {
    fontSize: scale(20),
    marginBottom: scale(4),
  },
  lastConnectStyle: { flexDirection: "row" },
});
