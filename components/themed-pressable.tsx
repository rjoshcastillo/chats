import {
  Pressable,
  type PressableProps,
  type PressableStateCallbackType,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedPressableProps = PressableProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedPressable({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedPressableProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background_600"
  );

  const combinedStyle:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>) =
    typeof style === "function"
      ? (state: PressableStateCallbackType) => [
          { backgroundColor },
          style(state),
        ]
      : [{ backgroundColor }, style];

  return <Pressable style={combinedStyle} {...otherProps} />;
}
