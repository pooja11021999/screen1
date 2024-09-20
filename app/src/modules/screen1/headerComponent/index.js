import React from "react";
import { StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { Colors } from "../../../../../assets/colors.js";
import CustomText from "../../../../../assets/commonElements/text";
import { globalStyles } from "../../../../../assets/globalStyle";
import HeaderMenu from "../../../components/header";
import RatingStars from "../../../components/ratingStars";

const Header = ({ navigation, item }) => {
  const { companyName, industryType, lastContacted, ratingPer } = item;

  const onLeftBtnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderMenu menu={true} refresh={true} onLeftBtnPress={onLeftBtnPress} />
      <View style={styles.contentContainer}>
        <CustomText text={companyName} externalStyle={styles.textStyle} />
        <RatingStars rating={ratingPer} />

        <View style={styles.detailsStyle}>
          <CustomText
            text={industryType}
            externalStyle={styles.detailsTxtStyle}
          />

          <View style={styles.lastConnectStyle}>
            <CustomText
              text="Last contacted on: "
              externalStyle={styles.detailsTxtStyle}
            />
            <CustomText
              text={lastContacted}
              externalStyle={styles.detailsTxtStyle}
            />
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
  detailsTxtStyle: {
    ...globalStyles.textStyle({
      txtColor: Colors.White,
      size: 13,
    }),
    fontWeight: "700",
  },
});
