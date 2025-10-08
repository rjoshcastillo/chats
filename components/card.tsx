import { View, type ViewProps, StyleSheet } from "react-native";

export function Card({ style, ...otherProps }: ViewProps) {
  return <View style={[styles.card, style]} {...otherProps} />;
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden",
    margin: 16,
    padding: 16
  },
});
