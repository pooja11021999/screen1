import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesome key={i} name="star" size={24} color="#FFD700" />
        );
      } else if (i - rating < 1 && i - rating > 0) {
        stars.push(
          <FontAwesome key={i} name="star" size={24} color="#FFD700" />
        );
      } else {
        stars.push(
          <FontAwesome key={i} name="star-o" size={24} color="#FFD700" />
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
