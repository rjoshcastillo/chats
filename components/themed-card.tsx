import { type ViewProps, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { usePulseAnimation } from "@/hooks/use-pulse-animation";
import Animated from "react-native-reanimated";

export function ThemedCard({ style, children, ...otherProps }: ViewProps) {
  const pulse = usePulseAnimation({ scaleTo: 1.1, duration: 600, delay: 300 });
  return (
    <LinearGradient
      colors={["#FF6B6B", "#FFD93D"]}
      style={[styles.card, style]}
      {...otherProps}
    >
      {children}
      <Animated.View
        style={[
          styles.decoration,
          { right: -10, width: 60, height: 60 },
          pulse.animate,
        ]}
      ></Animated.View>
      <Animated.View
        style={[styles.decoration, { bottom: 50 }, pulse.animate]}
      ></Animated.View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: "hidden",
    minHeight: 250,
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
