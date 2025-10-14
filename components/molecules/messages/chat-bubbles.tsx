import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { useIsFocused } from "@react-navigation/native";
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
  const { avatar, isMine, message, timestamp } = data;
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
  return (
    <View
      style={[
        styles.messageContainer,
        isMine ? styles.myMsgWrapper : styles.theirMsgWrapper,
      ]}
    >
      <Animated.Text
        style={[
          fadeIn.animate,
          styles.msgWrapper,
          isMine ? styles.myMsg : styles.theirMsg,
        ]}
      >
        {message}
      </Animated.Text>
    </View>
  );
}
const styles = StyleSheet.create({
  messageContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eee",
  },
  msgWrapper: {
    padding: 16,
    borderRadius: 20,
    width: "80%",
  },
  myMsgWrapper: { alignItems: "flex-end" },
  myMsg: {
    backgroundColor: "#FF6B6B",
    color: "#fff",
  },
  theirMsgWrapper: { alignItems: "flex-start" },
  theirMsg: { backgroundColor: "#fff", borderWidth: 1, borderColor: '#eee' },
});
