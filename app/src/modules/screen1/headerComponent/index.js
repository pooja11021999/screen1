import React from "react";
import { StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import CustomText from "../../../../../assets/commonElements/text";
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
          <CustomText text={industryType} />

          <View style={styles.lastConnectStyle}>
            <CustomText text="Last contacted on: " />
            <CustomText text={lastContacted} />
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
    paddingHorizontal: scale(15)
  },
  detailsStyle: {
    paddingTop: verticalScale(0),
    marginVertical: verticalScale(20),
  },
  contentContainer: {
    paddingTop: verticalScale(20),
  },
  textStyle: {
    fontSize: scale(20),
    marginBottom: scale(4),
  },
  lastConnectStyle: { flexDirection: "row" },
});
