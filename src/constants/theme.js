// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from "native-base";
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
};
export const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`
