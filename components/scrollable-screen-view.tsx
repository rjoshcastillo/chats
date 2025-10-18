import { ScrollViewProps, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemedScrollView } from "./themed-scroll-view";
import { useThemeStore } from "@/stores/themeStore";
import { Colors } from "@/constants/theme";

export default function ScrollableScreenView({
  children,
  ...otherProps
}: ScrollViewProps) {
  const insets = useSafeAreaInsets();
  const { theme } = useThemeStore();
  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.container, { backgroundColor: Colors[theme].background }]}
    >
      <ThemedScrollView contentContainerStyle={[{}]} {...otherProps}>
        {children}
      </ThemedScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
