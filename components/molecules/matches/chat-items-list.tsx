import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { MatchesItemType } from "@/types/common";
import { MessageCircle } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import Avatar from "../../ui/avatar";
import Pill from "../../ui/pill";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { AnimatedThemedView } from "@/components/animated-themed-view";
import { ThemedText } from "@/components/themed-text";
import IconMessage from "@/components/icons/IconMessage";

const ChatItemList = ({ item, index }: MatchesItemType) => {
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
    <AnimatedThemedView style={[fadeIn.animate]}>
      <Pressable
        style={({ pressed }) => [
          {
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
              <ThemedText style={{ fontWeight: "600", fontSize: 15 }}>
                {item.name}
              </ThemedText>
              <Pill label={item.status} color="#E3F2FD" textColor="#1565C0" />
            </View>
            <Text style={{ color: "#666", fontSize: 12 }}>{item.time}</Text>
          </View>

          <ThemedText>{item.message}</ThemedText>

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
          <IconMessage size={20}/>
        </View>
      </Pressable>
    </AnimatedThemedView>
  );
};
export default ChatItemList;
