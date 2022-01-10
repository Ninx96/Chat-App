import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import index from "../screens/root";
import ChatRoom from "../screens/root/ChatRoom";
import ChatLobby from "../screens/root/ChatLobby";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={index} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      <Stack.Screen name="ChatLobby" component={ChatLobby} />
    </Stack.Navigator>
  );
}
