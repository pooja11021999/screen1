import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HeaderMenu from "../../components/header";
import RatingStars from "../../components/ratingStars";
import CustomText from "../../../../assets/commonElements/text";

const Header = ({ data }) => {
  const { title, indType, lastConnect, ratingPer } = data;

  return (
    <View style={styles.container}>
      <HeaderMenu menu={true} refresh={true} />
      <View style={styles.contentContainer}>
        <CustomText text={title} externalStyle={{fontSize: 20, marginBottom: 4 }}/>
        <RatingStars rating={ratingPer} />

        <View style={styles.detailsStyle}>
          <CustomText text={indType}/>

          <View style={{ flexDirection: "row" }}>
            <CustomText text='Last contacted on: '/>
            <CustomText text={lastConnect}/>
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
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  detailsStyle: {
    paddingTop: 10,
  },
  contentContainer: {
    paddingTop: 15,
  },
});
