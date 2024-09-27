import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import DrawerNavigation from "./drawer";
import AuthorizationStack from "../screens/authorization/AuthorizationStack";

const Stack = createStackNavigator();

const AppNavigation = () => {
  const { data, setData } = useContext(DataContext);
  return data ? <DrawerNavigation /> : <AuthorizationStack />;
};

export default AppNavigation;
