import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import RootNavigator from "./RootNavigator";

export default function Navigation({ colorScheme, loginState }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {loginState ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
