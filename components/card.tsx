import { type ViewProps, StyleSheet, View } from "react-native";

export function Card({ style, children, ...otherProps }: ViewProps) {
  return (
    <View
      style={[styles.card, style]}
      {...otherProps}
    >
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#3a3a3a",
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
