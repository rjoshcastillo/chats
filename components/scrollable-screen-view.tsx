import { ScrollView, ScrollViewProps, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScrollableScreenView({
  children,
  ...otherProps
}: ScrollViewProps) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={[styles.container]}
      contentContainerStyle={[
        {
          paddingBottom: insets.bottom,
        },
      ]}
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
