import { ScrollView, ScrollViewProps, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedScrollView } from "./themed-scroll-view";

export default function ScrollableScreenView({
  children,
  ...otherProps
}: ScrollViewProps) {
  const insets = useSafeAreaInsets();
  return (
    <ThemedScrollView
      style={[styles.container]}
      contentContainerStyle={[
        {
          paddingBottom: insets.bottom,
        },
      ]}
      {...otherProps}
    >
      {children}
    </ThemedScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
