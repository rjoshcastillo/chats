import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { ScrollViewProps, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedScreen({
  children,
}: ScrollViewProps) {
  const isFocused = useIsFocused();
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (isFocused) {
      opacity.value = withTiming(1, { duration: 400 });
    } else {
      opacity.value = 0;
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[{ flex: 1}]}>
      {children}
    </Animated.View>
  );
}