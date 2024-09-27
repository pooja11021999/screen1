import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Authorization } from "./index";

const Stack = createNativeStackNavigator();

const AuthorizationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Authorization"
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="Authorization"
        component={Authorization}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthorizationStack;
