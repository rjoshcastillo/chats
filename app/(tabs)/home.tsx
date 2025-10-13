import AnimatedScreen from "@/components/animated-screen";
import QuickActionItem from "@/components/molecules/home/quick-action-item";
import RecentActivityItem from "@/components/molecules/home/recent-activity-item";
import ScrollableScreenView from "@/components/scrollable-screen-view";
import { ThemedCard } from "@/components/themed-card";
import { Colors } from "@/constants/theme";
import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { usePulseAnimation } from "@/hooks/use-pulse-animation";
import { useSlideInAnimation } from "@/hooks/use-slide-in-animation";
import { quickActionType, recentActivityType } from "@/types/common";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Heart,
  MessageCircle,
  Star,
  User2,
  Users2,
  Zap,
} from "lucide-react-native";
import React, { useEffect } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

export default function HomeScreen() {
  const isFocused = useIsFocused();
  const fadeIn = useFadeInAnimation({ fromScale: 0.9, duration: 400 });
  const pulse = usePulseAnimation({ scaleTo: 1.1, duration: 600 });
  const slideInXY = useSlideInAnimation({
    fromX: 100,
    fromY: -100,
    duration: 500,
  });

  const recentActivty: recentActivityType[] = [
    { id: "12", activity: "Josh has visited your profile", date: "2 mins ago" },
    {
      id: "1",
      activity: "Josh has visited your profile",
      date: "32 mins ago",
    },
    {
      id: "2",
      activity: "Josh has visited your profile",
      date: "32 mins ago",
    },
    {
      id: "3",
      activity: "Josh has visited your profile",
      date: "32 mins ago",
    },
  ];
  const actions: quickActionType[] = [
    { label: "Matches", link: "/matches", icon: Heart },
    { label: "Profile", link: "/profile", icon: User2 },
    { label: "Premium", link: "/premium", icon: Star },
  ];
  useEffect(() => {
    if (isFocused) {
      // Reset animations whenever you revisit the Home screen
      fadeIn.reanimate?.();
      pulse.reanimate?.();
      slideInXY.reanimate?.();
    }
  }, [isFocused]);
  return (
    <AnimatedScreen>
      <ScrollableScreenView>
        {/* Home Statistics & Profile */}
        <Animated.View style={[styles.header, slideInXY.animate]}>
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
          <View style={styles.headerInner}>
            <View>
              <Text style={styles.heading1}>Hey There!</Text>
              <Text style={styles.heading3}>Hey, This is the subtitle?</Text>
            </View>

            <TouchableOpacity style={styles.buttonAvatar}>
              <User2 size={24} color={"white"} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerStatsContainer}>
            <View style={styles.headerStatsBox}>
              <Heart color={Colors["--red-500"]} />
              <Text style={{ fontWeight: "600" }}>34</Text>
              <Text style={{ fontSize: 12, color: "#666" }}>Total Matches</Text>
            </View>
            <View style={styles.headerStatsBox}>
              <MessageCircle color={Colors["--blue-500"]} />
              <Text style={{ fontWeight: "600" }}>7</Text>
              <Text style={{ fontSize: 12, color: "#666" }}>Active Chats</Text>
            </View>
            <View style={styles.headerStatsBox}>
              <Users2 color={Colors["--green-500"]} />
              <Text style={{ fontWeight: "600" }}>2.3k</Text>
              <Text style={{ fontSize: 12, color: "#666" }}>Profile Views</Text>
            </View>
          </View>
        </Animated.View>

        {/* Find Match Card */}
        <Animated.View
          style={[{ marginVertical: 20, marginHorizontal: 20 }, fadeIn.animate]}
        >
          <ThemedCard style={{ flex: 1 }}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                padding: 10,
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: 999,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Zap color="#fff" size={25} />
              </View>
              <View style={{ padding: 10, gap: 10, marginBottom: 20 }}>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
                <Text
                  style={{ textAlign: "center", color: "#eee", fontSize: 18 }}
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </Text>
              </View>
              <Animated.View style={[pulse.animate]}>
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: "rgba(255,255,255,0.3)",
                      height: 40,
                      width: 120,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: pressed ? 2 : 0,
                      borderColor: pressed ? "#fff" : "transparent",
                    },
                  ]}
                >
                  <Text style={{ color: "#fff", fontWeight: "600" }}>Find</Text>
                </Pressable>
              </Animated.View>
            </View>
          </ThemedCard>
        </Animated.View>

        {/* Quick Actions */}
        <View style={{ marginHorizontal: 20 }}>
          <Animated.View style={[fadeIn.animate]}>
            <Text style={[styles.heading1, { marginVertical: 20 }]}>
              Quick Actions
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {actions.map((item, index) => (
                <QuickActionItem key={index} item={item} index={index} />
              ))}
            </View>
          </Animated.View>
        </View>

        {/* Recent Activity */}
        <Animated.View
          style={[fadeIn.animate, { paddingBottom: 30, marginHorizontal: 20 }]}
        >
          <Text style={[styles.heading1, { marginTop: 20, marginBottom: 10 }]}>
            Recent Activity
          </Text>
          <FlatList
            scrollEnabled={false}
            data={recentActivty}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={({ item, index }) => (
              <RecentActivityItem item={item} index={index} />
            )}
          ></FlatList>
        </Animated.View>
      </ScrollableScreenView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 185,
    position: "relative",
  },
  headerInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerStatsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 28,
  },
  headerStatsBox: {
    display: "flex",
    gap: 3,
    alignItems: "center",
  },
  heading1: {
    fontSize: 18,
    fontWeight: "600",
  },
  heading3: {
    color: "#666",
    fontSize: 14,
  },
  buttonAvatar: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
