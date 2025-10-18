import AnimatedScreen from "@/components/animated-screen";
import IconMessage from "@/components/icons/IconMessage";
import ChatItemList from "@/components/molecules/matches/chat-items-list";
import ScrollableScreenView from "@/components/scrollable-screen-view";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { MatchesDataType } from "@/types/common";
import { LinearGradient } from "expo-linear-gradient";
import { MessageCircle } from "lucide-react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

export default function MatchesScreen() {
  const chatData: MatchesDataType[] = [
    {
      name: "Josh",
      status: "Active",
      time: "2 min ago",
      message: "Naisu, this is a sample conversation.",
      interests: ["Travel", "Personal"],
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Ava",
      status: "Ended",
      time: "3 hrs ago",
      message: "Hey! Are we still on for tonight?",
      interests: ["Music", "Movies"],
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Liam",
      status: "Ended",
      time: "2 Weeks ago",
      message: "I'll send you the files once I get home.",
      interests: ["Work", "Tech"],
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Sophia",
      status: "Ended",
      time: "24 hrs agp",
      message: "Hold on, I'm writing something for you 😄",
      interests: ["Books", "Travel"],
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Noah",
      status: "Ended",
      time: "10 min ago",
      message: "That place was amazing! We should go again.",
      interests: ["Food", "Adventure"],
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Isabella",
      status: "Ended",
      time: "1 hour ago",
      message: "Don't forget to bring the documents tomorrow.",
      interests: ["Work", "Health"],
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      name: "Ethan",
      status: "Ended",
      time: "1 hour ago",
      message: "Call me when you’re free!",
      interests: ["Gaming", "Movies"],
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Mia",
      status: "Ended",
      time: "30 min ago",
      message: "Loved that song you sent 🎶",
      interests: ["Music", "Art"],
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];

  const fadeIn = useFadeInAnimation({ fromScale: 0.9, duration: 400 });
  return (
    <AnimatedScreen>
      <ScrollableScreenView>
        <View style={styles.header}>
          <LinearGradient
            colors={["rgba(0,0,0,0.1)", "transparent"]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 10,
            }}
          />
          <View
            style={[
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                paddingVertical: 10,
              },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={[styles.heading1, { color: Colors["--red-500"] }]}>
                5
              </Text>
              <ThemedText style={styles.heading3}>Total Matches</ThemedText>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={[styles.heading1, { color: Colors["--blue-500"] }]}>
                18
              </Text>
              <ThemedText style={styles.heading3}>Active Chats</ThemedText>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={[styles.heading1, { color: Colors["--green-500"] }]}>
                3
              </Text>
              <ThemedText style={styles.heading3}>New Matches</ThemedText>
            </View>
          </View>
        </View>
        <View>
          <Animated.View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                padding: 20,
              },
              fadeIn.animate,
            ]}
          >
            <IconMessage size={20} />
            <ThemedText style={{ fontSize: 20, fontWeight: 600 }}>
              Conversations
            </ThemedText>
          </Animated.View>
          <FlatList
            scrollEnabled={false}
            data={chatData}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 4,
            }}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={({ item, index }) => (
              <ChatItemList item={item} index={index} />
            )}
          ></FlatList>
        </View>
      </ScrollableScreenView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: "relative",
  },
  heading1: {
    fontSize: 24,
    fontWeight: "600",
  },
  heading3: {
    fontSize: 14,
  },
});
