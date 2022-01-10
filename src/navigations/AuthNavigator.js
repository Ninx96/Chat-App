import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import index from "../screens/root";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
