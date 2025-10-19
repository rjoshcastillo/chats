import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { QuickActionItemType } from "@/types/common";
import { useIsFocused } from "@react-navigation/native";
import { Heart, Star, User2 } from "lucide-react-native";
import { useEffect } from "react";
import { Pressable, View, Text, Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");
const ITEM_MARGIN = 10;
const NUM_COLUMNS = 2;
const ITEM_WIDTH = (width - ITEM_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

export default function QuickActionItem({ item, onPress, index }: QuickActionItemType) {
  const isFocused = useIsFocused();
  const fadeIn = useFadeInAnimation({
    fromScale: 0.9,
    duration: 600,
    delay: index * 200,
  });

  useEffect(() => {
    if (isFocused) {
      fadeIn.reanimate?.();
    }
  }, [isFocused]);
  return (
    <Animated.View key={index} style={[fadeIn.animate]}>
      <ThemedPressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            width: ITEM_WIDTH - 10,
            flexDirection: "row",
            height: 70,
            borderRadius: 10,
            paddingHorizontal: 20,
            gap: 10,
            alignItems: "center",
          },
        ]}
      >
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 99,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.icon}
        </View>
        <ThemedText>{item.label}</ThemedText>
      </ThemedPressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
