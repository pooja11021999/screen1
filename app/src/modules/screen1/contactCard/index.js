import { FontAwesome } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

import CustomText from "../../../../../assets/commonElements/text";

const ContactCard = ({ isMenuOpened }) => {
  const [cardHeight, setCardHeight] = useState(0);
  const viewRef = useRef(null);

  const handleEvent = (event) => {
    const { height } = event.nativeEvent.layout;
    setCardHeight(height);
  };

  return (
    <View style={{ marginBottom: scale(cardHeight / 2 + 16) }}>
      <View
        onLayout={handleEvent}
        ref={viewRef}
        style={[
          styles.container,
          {
            top: -(cardHeight / 2),
            elevation: isMenuOpened ? 0 : moderateScale(4),
          },
        ]}
      >
        <View style={styles.textContainer}>
          <CustomText text={"Active"} externalStyle={styles.textStyle} />
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="envelope"
            size={scale(30)}
            color="#B2BEB5"
            style={styles.icon}
          />
          <View style={styles.circleIconContainer}>
            <FontAwesome name="phone" size={scale(20)} color="#fff" />
          </View>
          <FontAwesome
            name="whatsapp"
            size={scale(30)}
            color="#B2BEB5"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    padding: scale(15),
    marginHorizontal: scale(26),
    borderRadius: scale(12),
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  circleIconContainer: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    backgroundColor: "#B2BEB5",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: scale(10),
    marginLeft: scale(20),
  },
  icon: {
    marginLeft: scale(10),
  },
  textContainer: {
    flex: 1,
    alignSelf: "center",
  },
  textStyle: {
    color: "orange",
  },
});
