import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { quickActionItemType, quickActionType } from "@/types/common";
import { useIsFocused } from "@react-navigation/native";
import { Heart, Star, User2 } from "lucide-react-native";
import { useEffect } from "react";
import { Pressable, View, Text, Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");
const ITEM_MARGIN = 10;
const NUM_COLUMNS = 2;
const ITEM_WIDTH = (width - ITEM_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

export default function QuickActionItem({ item, index }: quickActionItemType) {
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
      <Pressable
        onPress={() => {
          alert(item.label);
        }}
        style={({ pressed }) => [
          {
            width: ITEM_WIDTH - 10,
            flexDirection: "row",
            backgroundColor: "#fff",
            height: 70,
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 20,
            gap: 10,
            alignItems: "center",
            borderColor: pressed ? "#FFD93D" : "#eee",
          },
        ]}
      >
        <View
          style={{
            width: 35,
            height: 35,
            backgroundColor: "#eee",
            borderRadius: 99,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <item.icon color="#343434ff" size={18} />
        </View>
        <Text>{item.label}</Text>
      </Pressable>
    </Animated.View>
  );
}
