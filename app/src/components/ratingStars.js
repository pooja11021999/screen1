import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../../assets/colors.js";

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesome
            key={i}
            name="star"
            size={scale(22)}
            color={Colors.Yellow}
          />
        );
      } else if (i - rating < 1 && i - rating > 0) {
        stars.push(
          <FontAwesome
            key={i}
            name="star"
            size={scale(22)}
            color={Colors.Yellow}
          />
        );
      } else {
        stars.push(
          <FontAwesome
            key={i}
            name="star-o"
            size={scale(22)}
            color={Colors.Yellow}
          />
        );
      }
    }

    return stars;
  };

  return <View style={styles.starContainer}>{renderStars()}</View>;
};

export default RatingStars;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
  },
});
