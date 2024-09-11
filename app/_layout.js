import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./(tabs)";
import First from "./(tabs)/first";
import Second from "./(tabs)/second";
import Third from "./(tabs)/third";

export default function Layout() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Basic Information"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: "#00477f",
          tabBarInactiveTintColor: "#B2BEB5",
          tabBarIndicatorStyle: {
            backgroundColor: "#00477f",
            height:3
          },
          tabBarLabelStyle: {
            flex: 1,
            maxWidth: 250,
          },
          tabBarItemStyle: {
            width: "auto",
          },
        }}
      >
        <Tab.Screen name="Basic Information" component={Index} />
        <Tab.Screen name="Owner Card" component={First} />
        <Tab.Screen name="Social Information" component={Second} />
        <Tab.Screen name="Other" component={Third} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
