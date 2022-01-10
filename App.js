import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { useColorScheme } from "react-native";
import { AuthContext } from "./src/services/Context";
import Navigation from "./src/navigations";
import { useLoadedAssets } from "./src/hooks/useLoadedAssets";
import useContextValue from "./src/hooks/useContextValue";
import { theme } from "./src/constants/theme";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();
  const contextValue = useContextValue();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <AuthContext.Provider value={contextValue}>
          <StatusBar hidden={false} style="dark" barStyle={"default"} />
          <Navigation
            colorScheme={colorScheme}
            loginState={contextValue.userToken}
          />
        </AuthContext.Provider>
      </NativeBaseProvider>
    );
  }
}
