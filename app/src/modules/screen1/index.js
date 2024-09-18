import {
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

import AddBtn from "../../components/addBtn";
import Layout from "./_layout";
import ContactCard from "./contactCard";
import Header from "./headerComponent";

export default function DetailsScreen({ navigation, route }) {
  const { item } = route.params;

  const [isMenuOpened, setMenuOpened] = useState(false);

  const handleIconPress = () => {
    setMenuOpened(true);
    navigation.navigate("EditCompanyDetailsScreen", {
      edit: true,
      company: item,
    });
  };

  const menuList = [
    {
      Note: "Add Contacts",
      renderIcon: () => (
        <MaterialIcons name="contacts" size={scale(20)} color="#fff" />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Note",
      renderIcon: () => (
        <MaterialCommunityIcons
          name="clipboard-outline"
          size={scale(20)}
          color="#fff"
        />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Contributor",
      renderIcon: () => (
        <Ionicons name="person" size={scale(20)} color="#fff" />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Meeting",
      renderIcon: () => (
        <MaterialCommunityIcons
          name="account-multiple"
          size={scale(20)}
          color="#fff"
        />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Call",
      renderIcon: () => (
        <MaterialIcons name="call" size={scale(20)} color="#fff" />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Task",
      renderIcon: () => (
        <FontAwesome6 name="list-ul" size={scale(20)} color="#fff" />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Opportunity",
      renderIcon: () => (
        <MaterialCommunityIcons
          name="white-balance-sunny"
          size={scale(20)}
          color="#fff"
        />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Edit",
      renderIcon: () => (
        <MaterialIcons name="edit" color="#fff" size={scale(25)} />
      ),
      handleIconPress: handleIconPress,
    },
  ];

  return (
    <>
      <View
        style={[styles.container, { opacity: scale(isMenuOpened ? 0.05 : 1) }]}
      >
        <View style={styles.firstBoxStyle}>
          <Header
            navigation={navigation}
            item={item}
            isMenuOpened={isMenuOpened}
          />
        </View>
        <View style={styles.secondBoxStyle}>
          <ContactCard isMenuOpened={isMenuOpened} />
          <Layout company={item} isMenuOpened={isMenuOpened} />
        </View>
      </View>

      {isMenuOpened && (
        <View style={styles.menuContainer}>
          <FlatList
            data={menuList}
            renderItem={({ item }) => (
              <View style={styles.menuStyle}>
                <View style={styles.noteContainer}>
                  <Text style={styles.NoteStyle}>{item.Note}</Text>
                </View>

                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() => item.handleIconPress()}
                >
                  {item.renderIcon()}
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.Note}
          />
        </View>
      )}

      <AddBtn
        onIconPress={handleIconPress}
        renderIcon={() => (
          <TouchableOpacity onPress={() => setMenuOpened(!isMenuOpened)}>
            {isMenuOpened ? (
              <Entypo name="cross" color="#fff" size={scale(26)} />
            ) : (
              <Ionicons name="menu" color="#fff" size={scale(22)} />
            )}
          </TouchableOpacity>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  firstBoxStyle: {
    flex: 1,
    backgroundColor: "#00477f",
    zIndex: 0,
  },
  secondBoxStyle: {
    flex: 2,
    zIndex: 1,
  },
  btnContainer: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    right: scale(0),
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
  },
  menuStyle: {
    marginBottom: scale(18),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    gap: scale(10),
  },
  NoteStyle: {
    textAlign: "right",
  },
  menuContainer: {
    position: "absolute",
    right: scale(30),
    bottom: scale(80),
  },
  noteContainer: {
    backgroundColor: "#fff",
    elevation: moderateScale(2),
    padding: scale(3),
  },
});
