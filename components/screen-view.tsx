import { Colors } from "@/constants/theme";
import { useThemeStore } from "@/stores/themeStore";
import { StyleSheet, View, ViewProps } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function ScreenView({ children, ...otherProps }: ViewProps) {
  const insets = useSafeAreaInsets();
  const { theme } = useThemeStore();
  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.root, { backgroundColor: Colors[theme].background }]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
