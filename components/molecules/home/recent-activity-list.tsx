import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { recentActivityItemType } from "@/types/common";
import { useIsFocused } from "@react-navigation/native";
import { Clock } from "lucide-react-native";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";

export default function ({ item, index }: recentActivityItemType) {
  const fadeIn = useFadeInAnimation({
    fromScale: 0.9,
    duration: 400,
    delay: index * 100,
  });
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fadeIn.reanimate?.();
    }
  }, [isFocused]);
  return (
    <Animated.View style={[fadeIn.animate]}>
      <Pressable
        style={{
          backgroundColor: "#fff",
          borderColor: "#eee",
          borderWidth: 2,
          paddingVertical: 16,
          paddingHorizontal: 10,
          borderRadius: 10,
          height: 70,
        }}
      >
        <Text>{item.activity}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Clock size={12} color={"#aaa"} style={{ marginTop: 1 }} />
          <Text style={{ color: "#aaa" }}>{item.date}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}
