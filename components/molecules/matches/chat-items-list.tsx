import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { chatItemsType } from "@/types/common";
import { MessageCircle } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import Avatar from "../../ui/avatar";
import Pill from "../../ui/pill";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const ChatItemList = ({ item, index }: chatItemsType) => {
  const fadeIn = useFadeInAnimation({
    fromScale: 0.9,
    duration: 200,
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
        style={({ pressed }) => [
          {
            backgroundColor: "#fff",
            borderColor: pressed ? "#FFD93D" : "#eee",
            borderWidth: pressed ? 1 : 0,
            borderRadius: 10,
            paddingVertical: 16,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <Avatar uri={item.avatar} size={60} />
        <View style={{ flex: 1, paddingHorizontal: 10, gap: 4 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                {item.name}
              </Text>
              <Pill label={item.status} color="#E3F2FD" textColor="#1565C0" />
            </View>
            <Text style={{ color: "#666", fontSize: 12 }}>{item.time}</Text>
          </View>

          <Text style={{ color: "#333" }}>{item.message}</Text>

          <View style={{ flexDirection: "row", gap: 6, marginTop: 10 }}>
            {item.interests.map((tag: string, i: number) => (
              <Pill
                key={i}
                label={tag}
                color={i % 2 === 0 ? "#FFF3E0" : "#E8F5E9"}
                textColor={i % 2 === 0 ? "#E65100" : "#2E7D32"}
              />
            ))}
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MessageCircle color="#666" size={22} />
        </View>
      </Pressable>
    </Animated.View>
  );
};
export default ChatItemList;
