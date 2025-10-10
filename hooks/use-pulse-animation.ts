import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

interface PulseOptions {
  scaleFrom?: number;
  scaleTo?: number;
  duration?: number;
  delay?: number;
}

export const usePulseAnimation = ({
  scaleFrom = 1,
  scaleTo = 1.1,
  duration = 800,
  delay = 0,
}: PulseOptions = {}) => {
  const scale = useSharedValue(scaleFrom);

  useEffect(() => {
    const start = () => {
      scale.value = withRepeat(
        withTiming(scaleTo, {
          duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      );
    };
    if (delay) setTimeout(start, delay);
    else start();
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return style;
};
