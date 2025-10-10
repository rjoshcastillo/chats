import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AnimatedScreen({
  children,
  ...otherProps
}: ScrollViewProps) {
  const isFocused = useIsFocused();
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(30);

  useEffect(() => {
    if (isFocused) {
      opacity.value = withTiming(1, { duration: 400 });
      translateX.value = withTiming(0, { duration: 400 });
    } else {
      opacity.value = 0;
      translateX.value = 30;
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
