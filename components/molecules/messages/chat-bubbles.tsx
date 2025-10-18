import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { useThemeStore } from "@/stores/themeStore";
import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

type ChatBubblesType = {
  avatar: string;
  isMine: boolean;
  message: string;
  timestamp: string;
};
type ChatBubblesDataType = {
  data: ChatBubblesType;
  index: number;
};
export default function ChatBubbles({ data, index }: ChatBubblesDataType) {
  const { isMine, message } = data;
  const { theme } = useThemeStore();
  const fadeIn = useFadeInAnimation({
    fromScale: 0.9,
    duration: 400,
    delay: index * 100,
  });
  const isFocused = useIsFocused();
  useEffect(() => {
    // if (isFocused) {
    //   fadeIn.reanimate?.();
    // }
  }, [isFocused]);

  const MessageTimeStamp = () => {
    const formatted = format(new Date(data.timestamp), "EEE 'at' h:mm a");
    return (
      <Text
        style={{
          position: "absolute",
          bottom: 5,
          right: 15,
          color: "#FFD93D",
          fontSize: 12,
        }}
      >
        {formatted}
      </Text>
    );
  };
  return (
    <ThemedView
      style={[
        styles.messageContainer,
        isMine ? styles.myMsgWrapper : styles.theirMsgWrapper,
        { backgroundColor: Colors[theme].background_600 },
      ]}
    >
      <Animated.View
        style={[
          fadeIn.animate,
          styles.msgWrapper,
          isMine ? styles.myMsg : styles.theirMsg,
        ]}
      >
        <Text
          style={{ color: isMine ? styles.myMsg.color : styles.theirMsg.color }}
        >
          {message}
        </Text>
        <MessageTimeStamp />
      </Animated.View>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  messageContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  msgWrapper: {
    padding: 16,
    paddingBottom: 25,
    borderRadius: 20,
    width: "80%",
    position: "relative",
  },
  myMsgWrapper: { alignItems: "flex-end" },
  myMsg: {
    backgroundColor: "#FF6B6B",
    color: "#fff",
  },
  theirMsgWrapper: { alignItems: "flex-start" },
  theirMsg: { backgroundColor: "#fff", color: "#000" },
});
