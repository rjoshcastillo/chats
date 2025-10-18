import { type ViewProps, StyleSheet, View } from "react-native";
import { ThemedView } from "./themed-view";
import { useThemeStore } from "@/stores/themeStore";
import { Colors } from "@/constants/theme";

export function Card({ style, children, ...otherProps }: ViewProps) {
  const { theme } = useThemeStore();
  return (
    <ThemedView
      style={[styles.card, style, { shadowColor: Colors[theme].shadowColor}]}
      {...otherProps}
    >
      {children}
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: "hidden",
    padding: 16,
    elevation: 6 //For android
  },
  decoration: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 9999,
    width: 100,
    height: 100,
  },
});
