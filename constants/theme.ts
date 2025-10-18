/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#df1394ff";
const tintColorDark = "#df1394ff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    background_600: "#f5f5f5",
    tint: tintColorLight,
    icon: "#0371c5ff",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    tabBarInactive: "#687076",
  },
  dark: {
    text: "#eeeceeff",
    background: "#2b2b2cff",
    background_600: "#4a4a4aff",
    tint: tintColorDark,
    icon: "#0371c5ff",
    tabIconDefault: "#5e5e5eff",
    tabIconSelected: tintColorDark,
    tabBarInactive: "#5e5e5eff",
  },
  "--red-500": "rgba(255, 107, 107, 1)",
  "--red-400": "rgba(255, 239, 239, 1)",
  "--blue-500": "rgba(77, 150, 255, 1)",
  "--blue-400": "rgba(228, 238, 255, 1)",
  "--green-500": "rgba(29, 209, 161, 1)",
  "--green-400": "rgba(227, 255, 247, 1)",
  "--yellow-500": "rgba(255, 187, 0, 1)",
  "--yellow-400": "rgba(255, 249, 228, 1)",
};

export const Fonts = Platform.select({
  ios: {
    sans: "QuicksandRegular",
    serif: "QuicksandRegular",
    rounded: "QuicksandMedium",
    mono: "QuicksandBold",
  },
  android: {
    sans: "QuicksandRegular",
    serif: "QuicksandRegular",
    rounded: "QuicksandMedium",
    mono: "QuicksandBold",
  },
  web: {
    sans: "QuicksandRegular, sans-serif",
    serif: "QuicksandRegular, serif",
    rounded: "QuicksandMedium, sans-serif",
    mono: "QuicksandBold, monospace",
  },
});
