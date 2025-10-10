import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface SlideInOptions {
  fromX?: number;
  fromY?: number;
  springConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
  duration?: number;
}

export const useSlideInAnimation = ({
  fromX = 0,
  fromY = 100,
  springConfig = { damping: 10, stiffness: 80, mass: 0.8 },
  duration = 400,
}: SlideInOptions = {}) => {
  const translateX = useSharedValue(fromX);
  const translateY = useSharedValue(fromY);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateX.value = withSpring(0, springConfig);
    translateY.value = withSpring(0, springConfig);
    opacity.value = withTiming(1, { duration });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
    opacity: opacity.value,
  }));

  return animatedStyle;
};
