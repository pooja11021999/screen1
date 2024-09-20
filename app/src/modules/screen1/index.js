import {
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

import { Colors } from "../../../../assets/colors.js";
import AddBtn from "../../components/addBtn";
import Layout from "./_layout";
import ContactCard from "./contactCard";
import Header from "./headerComponent";

export default function DetailsScreen({ navigation, route }) {
  const { item } = route.params;

  const [isMenuOpened, setMenuOpened] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (isMenuOpened) {
        setMenuOpened(false);
      }

      return () => {
        setMenuOpened(false);
      };
    }, [])
  );

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
        <MaterialIcons name="contacts" size={scale(20)} color={Colors.White} />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Note",
      renderIcon: () => (
        <MaterialCommunityIcons
          name="clipboard-outline"
          size={scale(20)}
          color={Colors.White}
        />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Contributor",
      renderIcon: () => (
        <Ionicons name="person" size={scale(20)} color={Colors.White} />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Meeting",
      renderIcon: () => (
        <MaterialCommunityIcons
          name="account-multiple"
          size={scale(20)}
          color={Colors.White}
        />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Call",
      renderIcon: () => (
        <MaterialIcons name="call" size={scale(20)} color={Colors.White} />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Task",
      renderIcon: () => (
        <FontAwesome6 name="list-ul" size={scale(20)} color={Colors.White} />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Add Opportunity",
      renderIcon: () => (
        <MaterialCommunityIcons
          name="white-balance-sunny"
          size={scale(20)}
          color={Colors.White}
        />
      ),
      handleIconPress: handleIconPress,
    },
    {
      Note: "Edit",
      renderIcon: () => (
        <MaterialIcons name="edit" color={Colors.White} size={scale(25)} />
      ),
      handleIconPress: handleIconPress,
    },
  ];

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const menuAnimRefs = useRef(
    menuList.map(() => ({
      opacity: new Animated.Value(0),
      translateY: new Animated.Value(50),
    }))
  ).current;

  useEffect(() => {
    if (isMenuOpened) {
      Animated.parallel([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          delay: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        menuAnimRefs.forEach((anim, index) => {
          Animated.parallel([
            Animated.timing(anim.opacity, {
              toValue: 1,
              duration: 300,
              delay: index * 50,
              useNativeDriver: true,
            }),
            Animated.timing(anim.translateY, {
              toValue: 0,
              duration: 300,
              delay: index * 50,
              useNativeDriver: true,
            }),
          ]).start();
        });
      });
    } else {
      Animated.parallel([
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        menuAnimRefs.forEach((anim) => {
          Animated.parallel([
            Animated.timing(anim.opacity, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
            Animated.timing(anim.translateY, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ]).start();
        });
      });
    }
  }, [isMenuOpened]);

  const rotateInterpolation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const handleBackgroundPress = () => {
    if (isMenuOpened) {
      setMenuOpened(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleBackgroundPress}>
      <View style={styles.main}>
        <View
          style={[
            styles.container,
            { opacity: scale(isMenuOpened ? 0.05 : 1) },
          ]}
        >
          <View style={styles.firstBoxStyle({})}>
            <Header
              navigation={navigation}
              item={item}
              isMenuOpened={isMenuOpened}
            />
          </View>
          <ContactCard
            isMenuOpened={isMenuOpened}
            externalStyle={{ zIndex: 2 }}
            item={item}
          />
          <View style={styles.secondBoxStyle}>
            <Layout company={item} isMenuOpened={isMenuOpened} />
          </View>
        </View>

        {isMenuOpened && (
          <View style={styles.menuContainer}>
            <FlatList
              data={menuList}
              renderItem={({ item, index }) => (
                <Animated.View
                  style={[
                    styles.menuStyle,
                    {
                      opacity: menuAnimRefs[index].opacity,
                      transform: [
                        { translateY: menuAnimRefs[index].translateY },
                      ],
                    },
                  ]}
                >
                  <View style={styles.noteContainer}>
                    <Text style={styles.NoteStyle}>{item.Note}</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => item.handleIconPress()}
                  >
                    {item.renderIcon()}
                  </TouchableOpacity>
                </Animated.View>
              )}
              keyExtractor={(item) => item.Note}
              inverted
            />
          </View>
        )}

        <AddBtn
          onIconPress={() => console.log("menuIcon pressed")}
          renderIcon={() => (
            <TouchableOpacity onPress={() => setMenuOpened(!isMenuOpened)}>
              <Animated.View
                style={{ transform: [{ rotate: rotateInterpolation }] }}
              >
                {isMenuOpened ? (
                  <Entypo name="plus" color={Colors.White} size={scale(26)} />
                ) : (
                  <Ionicons name="menu" color={Colors.White} size={scale(22)} />
                )}
              </Animated.View>
            </TouchableOpacity>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  firstBoxStyle: ({ bgColor = Colors.DarkBlue }) => ({
    flex: 1,
    backgroundColor: bgColor,
    zIndex: 0,
  }),
  secondBoxStyle: {
    flex: 2,
    zIndex: 0,
  },
  btnContainer: {
    backgroundColor: Colors.OrangeGiant,
    alignItems: "center",
    justifyContent: "center",
    right: scale(0),
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
  },
  menuStyle: {
    marginBottom: scale(12),
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
    bottom: scale(90),
  },
  noteContainer: {
    backgroundColor: Colors.White,
    elevation: moderateScale(2),
    padding: scale(3),
    paddingHorizontal: scale(6),
    borderRadius: scale(5),
  },
});
