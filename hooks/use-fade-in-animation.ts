import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from "react-native-reanimated";

interface ShowUpOptions {
  fromScale?: number;
  duration?: number;
  delay?: number;
}

export const useFadeInAnimation = ({
  fromScale = 0.9,
  duration = 500,
  delay = 0,
}: ShowUpOptions = {}) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(fromScale);

  useEffect(() => {
    const start = () => {
      opacity.value = withTiming(1, {
        duration,
        easing: Easing.out(Easing.ease),
      });
      scale.value = withSpring(1, { damping: 12, stiffness: 100 });
    };

    if (delay) setTimeout(start, delay);
    else start();
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return style;
};
