import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  cancelAnimation,
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

  const start = () => {
    scale.value = withRepeat(
      withTiming(scaleTo, {
        duration,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // infinite
      true // reverse back and forth
    );
  };

  const stop = () => {
    cancelAnimation(scale);
    scale.value = scaleFrom;
  };

  const reanimate = () => {
    stop();
    start();
  };

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(reanimate, delay);
      return () => clearTimeout(timer);
    } else {
      reanimate();
    }
  }, []);

  const animate = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return { animate, reanimate };
};
