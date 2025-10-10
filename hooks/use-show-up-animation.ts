import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from "react-native-reanimated";

interface ShowUpOptions {
  fromY?: number;
  duration?: number;
  delay?: number;
}

export const useShowUpAnimation = ({
  fromY = 40,
  duration = 500,
  delay = 0,
}: ShowUpOptions = {}) => {
  const translateY = useSharedValue(fromY);
  const opacity = useSharedValue(0);

  useEffect(() => {
    const start = () => {
      opacity.value = withTiming(1, { duration, easing: Easing.out(Easing.ease) });
      translateY.value = withSpring(0, { damping: 12, stiffness: 100 });
    };

    if (delay) setTimeout(start, delay);
    else start();
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return style;
};
