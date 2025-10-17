import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Quicksand-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Quicksand-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Quicksand-Bold.ttf"),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" translucent={true} />
    </SafeAreaView>
  );
}
