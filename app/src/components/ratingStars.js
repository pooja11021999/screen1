import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesome key={i} name="star" size={scale(24)} color="#FFD700" />
        );
      } else if (i - rating < 1 && i - rating > 0) {
        stars.push(
          <FontAwesome key={i} name="star" size={scale(24)} color="#FFD700" />
        );
      } else {
        stars.push(
          <FontAwesome key={i} name="star-o" size={scale(24)} color="#FFD700" />
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
