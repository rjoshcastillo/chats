import AnimatedScreen from "@/components/animated-screen";
import ChatBubbles from "@/components/molecules/messages/chat-bubbles";
import ScreenView from "@/components/screen-view";
import Avatar from "@/components/ui/avatar";
import { ArrowLeft, EllipsisVertical } from "lucide-react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function MessagesScreen() {
  const conversation = [
    {
      avatar: "https://example.com/avatars/user1.png",
      isMine: true,
      message:
        "Hey! How are you doing today? I was just thinking about our project timeline — do you think we can finish the prototype before Friday? I might need your help testing the new features tonight if you’re available.",
      timestamp: "2025-10-13T09:15:00Z",
    },
    {
      avatar: "https://example.com/avatars/user2.png",
      isMine: false,
      message:
        "Hi! Yeah, I think we can make it if we stay focused. I’ve already completed most of the UI polishing, so we just need to integrate the new backend API responses. I can help tonight after 8 PM.",
      timestamp: "2025-10-13T09:17:20Z",
    },
    {
      avatar: "https://example.com/avatars/user1.png",
      isMine: true,
      message:
        "Perfect. I’ll prepare the data mockups so we can test end-to-end. Also, I’ve noticed some lag on the message screen — maybe we should optimize the FlatList rendering with memoization or windowing?",
      timestamp: "2025-10-13T09:18:45Z",
    },
    {
      avatar: "https://example.com/avatars/user2.png",
      isMine: false,
      message:
        "Yeah, I noticed that too! It starts to drop frames when there are more than 50 messages. We can use `React.memo` for message items and set `removeClippedSubviews` to true for better performance. That should help smooth things out.",
      timestamp: "2025-10-13T09:20:10Z",
    },
    {
      avatar: "https://example.com/avatars/user1.png",
      isMine: true,
      message:
        "Sounds good. By the way, do we have an updated logo for the splash screen? I saw the old one still in `assets/logo.png`, and it doesn’t match our latest brand colors.",
      timestamp: "2025-10-13T09:22:30Z",
    },
    {
      avatar: "https://example.com/avatars/user2.png",
      isMine: false,
      message:
        "Oh, right. The new logo was uploaded in Figma last night. It’s under the 'Brand Assets' section — you can export it as a PNG and replace the existing one. Make sure to update the background gradient too; it’s now using #4A90E2 instead of #007AFF.",
      timestamp: "2025-10-13T09:24:10Z",
    },
    {
      avatar: "https://example.com/avatars/user1.png",
      isMine: true,
      message:
        "Got it. I’ll handle that after lunch. Once everything’s integrated, we can push a build to TestFlight for internal testing tomorrow morning. Let’s aim for that, yeah?",
      timestamp: "2025-10-13T09:26:05Z",
    },
    {
      avatar: "https://example.com/avatars/user2.png",
      isMine: false,
      message:
        "Yes, that works. I’ll review the API documentation again just to be sure all endpoints are returning consistent data. It’ll make the demo much smoother if everything syncs properly.",
      timestamp: "2025-10-13T09:27:45Z",
    },
    {
      avatar: "https://example.com/avatars/user1.png",
      isMine: true,
      message:
        "Awesome. Appreciate the teamwork as always! Let’s crush this release — we’re really close to making it shine 💪",
      timestamp: "2025-10-13T09:29:00Z",
    },
  ];

  return (
    <AnimatedScreen>
      <ScreenView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.4,
            shadowRadius: 4,
            paddingVertical: 10,
            paddingHorizontal: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <ArrowLeft color="#555" />
            <Avatar
              uri="https://randomuser.me/api/portraits/men/9.jpg"
              size={45}
            />
            <View>
              <Text style={{ fontWeight: 600, fontSize: 16 }}>John Doe</Text>
              <Text style={{ color: "rgba(24, 197, 99, 1)" }}>Online</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                backgroundColor: "rgba(24, 197, 99, 0.46)",
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "rgba(255, 255, 255, 1)" }}>09:20</Text>
            </View>
            <EllipsisVertical color="#555" />
          </View>
        </View>
        <FlatList
          style={{ flexDirection: "column-reverse" }}
          data={conversation}
          renderItem={({ item, index }) => (
            <ChatBubbles data={item} index={index} />
          )}
        ></FlatList>
      </ScreenView>
    </AnimatedScreen>
  );
}
