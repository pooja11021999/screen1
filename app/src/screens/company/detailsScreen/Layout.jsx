import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { Colors } from "../../../../assets/colors/index.js";
import First from "./(tabs)/First.jsx";
import Index from "./(tabs)/index.jsx";
import Second from "./(tabs)/Second.jsx";
import Third from "./(tabs)/Third.jsx";

export default function Layout({ company, isMenuOpened }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Basic Information"
      screenOptions={({ route }) => ({
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: Colors.DarkBlue,
        tabBarInactiveTintColor: Colors.GrayishCyan,
        tabBarIndicatorStyle: styles.tabBarIndicator,
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={[
              {
                color,
                fontSize: scale(14),
                fontFamily: focused ? "Roboto_700Bold" : "Roboto_400Regular",
                minWidth: scale(130),
                textAlign: "center",
              },
            ]}
          >
            {route.name}
          </Text>
        ),
        tabBarItemStyle: styles.tabBarItem,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Basic Information">
        {() => <Index company={company} />}
      </Tab.Screen>
      <Tab.Screen name="Owner Card" component={First} />
      <Tab.Screen name="Social Information" component={Second} />
      <Tab.Screen name="Other" component={Third} />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  tabBarIndicator: {
    backgroundColor: Colors.DarkBlue,
    height: verticalScale(3.5),
  },
  tabBarItem: {
    width: "auto",
  },
  tabBar: {
    elevation: 0,
    borderBottomWidth: scale(0.8),
    borderBottomColor: Colors.LightGrey,
  },
});
