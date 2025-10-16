import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, ViewStyle } from "react-native";

interface IToggleSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  width?: number;
  height?: number;
  thumbSize?: number;
  activeColor?: string;
  inactiveColor?: string;
  style?: ViewStyle;
}

export default function ToggleSwitch({
  value,
  onValueChange,
  width = 40,
  height = 24,
  thumbSize = 18,
  activeColor = "#FF6B6B",
  inactiveColor = "#ccc",
  style,
}: IToggleSwitchProps) {
  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  const travel = Math.max(0, width - thumbSize - 6); 

  useEffect(() => {
    Animated.timing(anim, {
      toValue: value ? 1 : 0,
      duration: 180,
      useNativeDriver: false, 
    }).start();
  }, [value, anim]);

  const containerBg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveColor, activeColor],
  });

  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, travel],
  });

  const handleToggle = () => {
    onValueChange?.(!value);
  };

  return (
    <Pressable
      onPress={handleToggle}
      style={[{ alignSelf: "flex-end" }, style]}
    >
      <Animated.View
        style={[
          styles.container,
          {
            width,
            height,
            borderRadius: height / 2,
            backgroundColor: containerBg,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              width: thumbSize,
              height: thumbSize,
              borderRadius: thumbSize / 2,
              transform: [{ translateX }],
              left: 3,
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    justifyContent: "center",
  },
  thumb: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 3, 
  },
});
