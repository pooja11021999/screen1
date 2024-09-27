import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

import { Colors, CustomText, globalStyles } from "../../../helpers/index";

const ContactCard = ({ isMenuOpened, externalStyle, item }) => {
  const [cardHeight, setCardHeight] = useState(0);

  const viewRef = useRef(null);

  const handleEvent = (event) => {
    const { height } = event.nativeEvent.layout;
    setCardHeight(height);
  };

  return (
    <View style={[{ marginBottom: scale(cardHeight / 2 + 10) }, externalStyle]}>
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
          <CustomText text={item.status} externalStyle={styles.textStyle} />
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="envelope"
            size={scale(20)}
            color={Colors.DarkBlue}
            style={styles.icon}
          />
          <View style={styles.circleIconContainer}>
            <FontAwesome name="phone" size={scale(15)} color={Colors.White} />
          </View>
          <FontAwesome5
            name="whatsapp"
            brand={true}
            size={scale(27)}
            color={Colors.LimeGreen}
            style={[styles.icon]}
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
    backgroundColor: Colors.White,
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
    alignItems: "center",
  },
  circleIconContainer: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    backgroundColor: Colors.Blue,
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
  textStyle: globalStyles.textStyle({
    txtColor: Colors.Orange,
    size: 14,
  }),
});
