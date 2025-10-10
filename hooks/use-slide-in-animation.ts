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
  delay?: number;
}

export const useSlideInAnimation = ({
  fromX = 0,
  fromY = 100,
  springConfig = { damping: 10, stiffness: 80, mass: 0.8 },
  duration = 400,
  delay = 0,
}: SlideInOptions = {}) => {
  const translateX = useSharedValue(fromX);
  const translateY = useSharedValue(fromY);
  const opacity = useSharedValue(0);

  const reanimate = () => {
    // Reset values before animating again
    translateX.value = fromX;
    translateY.value = fromY;
    opacity.value = 0;

    // Animate to final state
    translateX.value = withSpring(0, springConfig);
    translateY.value = withSpring(0, springConfig);
    opacity.value = withTiming(1, { duration });
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
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
    opacity: opacity.value,
  }));

  return { animate, reanimate };
};
