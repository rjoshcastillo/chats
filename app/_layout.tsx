import { Colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useThemeStore } from "@/stores/themeStore";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const { theme, loadTheme } = useThemeStore();

  useEffect(() => {
    (async () => {
      await loadTheme();
    })();
  }, []);

  const backgroundColor = useThemeColor(
    { light: Colors[theme].background, dark: Colors[theme].background },
    "background"
  );
  const isDark = theme === "dark";

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
      </Stack>

      <StatusBar
        style={isDark ? "light" : "dark"}
        backgroundColor={backgroundColor}
        translucent={false}
      />
    </View>
  );
}
