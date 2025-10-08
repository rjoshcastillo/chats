import React, { useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import {
  HomeIcon,
  MessageCircle,
  User2,
  Heart,
} from "lucide-react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

// ✅ wrap Text so we can animate it
const AnimatedText = Animated.createAnimatedComponent(Text);

const ICON_SIZE = 18;
const TAB_WIDTH = 90;
const ACTIVE_COLOR = "#FF6B6B";
const INACTIVE_COLOR = "#999";

const icons: Record<string, React.ComponentType<{ color: string; size: number }>> = {
  home: HomeIcon,
  messages: MessageCircle,
  matches: Heart,
  profile: User2,
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const activeIndex = state.index;

  // 🟢 slide + fade animation on load
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withSpring(0, { damping: 10, stiffness: 160, mass: 0.8 });
    opacity.value = withTiming(1, { duration: 400 });
  }, []);

  const containerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.container, containerStyle]}>
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
                <Icon color={isFocused ? ACTIVE_COLOR : INACTIVE_COLOR} size={ICON_SIZE} />
              )}
              <AnimatedText style={[styles.label, textStyle]}>
                {label}
              </AnimatedText>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: '100%',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    shadowColor: '#000',
  },
  tab: {
    width: TAB_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    color: INACTIVE_COLOR,
  },
});
