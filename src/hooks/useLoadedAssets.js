import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";
import React from "react";

export function useLoadedAssets() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load Images
        const images = [];
        const cacheImages = images.map((image) => {
          return Asset.fromModule(image).downloadAsync();
        });

        // Load fonts
        const fonts = [
          { ...Ionicons.font },
          { "Roboto-Light": require("../../assets/fonts/roboto.thin.ttf") },
          {
            "Roboto-LightItalic": require("../../assets/fonts/roboto.thin-italic.ttf"),
          },
        ];
        const cacheFonts = fonts.map((font) => {
          return Font.loadAsync(font);
        });

        // Combine arrays
        const cache = cacheImages.concat(cacheFonts);

        await Promise.all(cache);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
