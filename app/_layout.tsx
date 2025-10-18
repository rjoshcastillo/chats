import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useColorScheme } from "react-native"; // ✅ for system detection

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const backgroundColor = useThemeColor(
    { light: "#fff", dark: "#2b2b2cff" },
    "background"
  );

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Quicksand-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Quicksand-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
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
    </SafeAreaView>
  );
}
