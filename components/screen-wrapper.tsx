import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenWrapper({
  children,
  ...otherProps
}: ScrollViewProps) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      {...otherProps}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
