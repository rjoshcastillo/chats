import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { HomeIcon, MessageCircle, User2, Heart } from "lucide-react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSlideInAnimation } from "@/hooks/use-slide-in-animation";
import { AnimatedThemedView } from "./animated-themed-view";
import { useThemeStore } from "@/stores/themeStore";
import { Colors } from "@/constants/theme";

// ✅ wrap Text so we can animate it
const AnimatedText = Animated.createAnimatedComponent(Text);

const ICON_SIZE = 18;
const TAB_WIDTH = 90;
const ACTIVE_COLOR = "#FF6B6B";
const INACTIVE_COLOR = "#999";

const icons: Record<
  string,
  React.ComponentType<{ color: string; size: number }>
> = {
  home: HomeIcon,
  messages: MessageCircle,
  matches: Heart,
  profile: User2,
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const activeIndex = state.index;
  const slideIn = useSlideInAnimation({
    fromY: 100,
    duration: 300,
  });
  const { theme } = useThemeStore();
  return (
    <AnimatedThemedView
      style={[
        styles.container,
        slideIn.animate,
        { borderTopColor: Colors[theme].background_600 },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;
        const isFocused = activeIndex === index;
        const Icon = icons[route.name];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconStyle = useAnimatedStyle(() => ({
          transform: [{ scale: withSpring(isFocused ? 1.1 : 1) }],
          opacity: withTiming(isFocused ? 1 : 0.6),
        }));

        const textStyle = useAnimatedStyle(() => ({
          color: withTiming(isFocused ? ACTIVE_COLOR : INACTIVE_COLOR),
        }));

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.tab}
          >
            <Animated.View style={[{ alignItems: "center" }, iconStyle]}>
              {Icon && (
                <Icon
                  color={isFocused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={ICON_SIZE}
                />
              )}
              <AnimatedText style={[styles.label, textStyle]}>
                {label}
              </AnimatedText>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </AnimatedThemedView>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    overflow:'hidden',
    width: "100%",
    borderTopWidth: 1,
    shadowColor: "#000",
  },
  tab: {
    width: TAB_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 14,
    color: INACTIVE_COLOR,
  },
});
