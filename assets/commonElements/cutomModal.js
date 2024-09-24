import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { scale } from "react-native-size-matters";
import { Colors } from "../colors.js";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../globalStyle/index.js";

const CutomModal = ({ isModalVisible, setModalVisible, menuOptions }) => {
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.itemStyle} onPress={item.onPress}>
        <Text style={styles.itemTitleStyle}> {item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <AntDesign
                name="arrowleft"
                size={scale(23)}
                color={Colors.White}
              />
            </View>
            <View style={styles.modalContent}>
              <FlatList
                data={menuOptions}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => item.title}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default CutomModal;

const styles = StyleSheet.create({
  modalContainer: {
    height: "50%",
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalHeader: {
    backgroundColor: Colors.DarkBlue,
    height: scale(55),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    justifyContent: "center",
    paddingHorizontal: scale(18),
  },
  modalContent: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.White,
    paddingHorizontal: scale(15),
    // justifyContent: "center",
    // alignItems: "center",
  },
  itemTitleStyle: {
    marginHorizontal: scale(7),
    ...globalStyles.textStyle({}),
  },
  itemStyle: {
    paddingVertical: scale(15),
    borderBottomWidth: scale(0.6),
    borderBottomColor: Colors.VeryLightGray,
  },
});
