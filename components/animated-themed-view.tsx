import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import Animated from "react-native-reanimated";

export type AnimatedThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function AnimatedThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: AnimatedThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <Animated.View style={[{ backgroundColor }, style]} {...otherProps} />;
}
