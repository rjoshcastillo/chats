import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay,
  Easing,
} from "react-native-reanimated";

interface BounceOptions {
  fromY?: number; // how high it moves
  delay?: number; // delay for staggering
  repeat?: boolean; // continuous or one-time
  duration?: number;
}

export const useBounceAnimation = ({
  fromY = 8,
  delay = 0,
  repeat = true,
  duration = 600,
}: BounceOptions = {}) => {
  const translateY = useSharedValue(0);

  const reanimate = () => {
    // Smooth up-down wave motion
    const sequence = withSequence(
      withTiming(-fromY, {
        duration: duration / 2,
        easing: Easing.out(Easing.quad),
      }),
      withTiming(0, {
        duration: duration / 2,
        easing: Easing.in(Easing.quad),
      })
    );

    translateY.value = withDelay(
      delay,
      repeat ? withRepeat(sequence, -1, false) : sequence
    );
  };

  useEffect(() => {
    reanimate();
  }, []);

  const animate = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return { animate };
};
