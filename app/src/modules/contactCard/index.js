import { FontAwesome } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomText from "../../../../assets/commonElements/text";

const ContactCard = () => {
  const [cardHeight, setCardHeight] = useState(0);
  const viewRef = useRef(null);

  const handleEvent = (event) => {
    const { height } = event.nativeEvent.layout;
    setCardHeight(height);
  };

  return (
    <View
      onLayout={handleEvent}
      ref={viewRef}
      style={[styles.container, { top: -(cardHeight / 3) }]}
    >
      <View style={styles.textContainer}>
        <CustomText
          text={"Active"}
          externalStyle={{ color: "orange", marginBottom: 10 }}
        />
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome
          name="envelope"
          size={30}
          color="#B2BEB5"
          style={styles.icon}
        />
        <View style={styles.circleIconContainer}>
          <FontAwesome name="phone" size={20} color="#fff" />
        </View>
        <FontAwesome
          name="whatsapp"
          size={30}
          color="#B2BEB5"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 4,
    padding: 15,
    marginHorizontal: 26,
    borderRadius: 12,
    flexDirection: "row",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  circleIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#B2BEB5",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginLeft: 20,
  },
  icon: {
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    alignSelf: "center",
  },
});
