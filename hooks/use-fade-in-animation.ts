import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from "react-native-reanimated";

interface FadeInOptions {
  fromScale?: number;
  duration?: number;
  delay?: number;
}

export const useFadeInAnimation = ({
  fromScale = 1,
  duration = 500,
  delay = 0,
}: FadeInOptions = {}) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(fromScale);


  const reanimate = () => {
    opacity.value = 0;
    scale.value = fromScale;

    const startAnimation = () => {
      opacity.value = withTiming(1, {
        duration,
        easing: Easing.out(Easing.ease),
      });
      scale.value = withSpring(1, { damping: 12, stiffness: 100 });
    };

    if (delay) {
      setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }
  };

  useEffect(() => {
    reanimate(); 
  }, []);

  const animate = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return { animate, reanimate };
};
