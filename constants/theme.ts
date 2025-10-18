/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#FF6B6B";
const tintColorDark = "#FF6B6B";

export const Colors = {
  light: {
    text: "#555",
    subText: "#666",
    background: "#fff",
    background_600: "#f5f5f5",
    tint: tintColorLight,
    tabSelected: tintColorLight,
    shadowColor: "#3a3a3a",
  },
  dark: {
    text: "#eeeceeff",
    subText: "#666",
    background: "#000000",
    background_600: "#131313",
    tint: tintColorDark,
    shadowColor: "#000000",
    tabSelected: tintColorDark,
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
