import { AnimatedThemedView } from "@/components/animated-themed-view";
import IconHeart from "@/components/icons/IconHeart";
import IconMessage from "@/components/icons/IconMessage";
import IconProfile from "@/components/icons/IconProfiles";
import IconStar from "@/components/icons/IconStar";
import IconUsers from "@/components/icons/IconUsers";
import QuickActionItem from "@/components/molecules/home/quick-action-item";
import RecentActivityItem from "@/components/molecules/home/recent-activity-item";
import ScrollableScreenView from "@/components/scrollable-screen-view";
import { StyledCard } from "@/components/styled-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useFadeInAnimation } from "@/hooks/use-fade-in-animation";
import { usePulseAnimation } from "@/hooks/use-pulse-animation";
import { useSlideInAnimation } from "@/hooks/use-slide-in-animation";
import { QuickActionDataType, RecentActivityDataType } from "@/types/common";
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
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

export default function HomeScreen() {
  const isFocused = useIsFocused();
  const findMatchfadeIn = useFadeInAnimation({
    fromScale: 0.9,
    duration: 400,
    delay: 200,
  });
  const quickActionfadeIn = useFadeInAnimation({
    duration: 400,
    delay: 300,
  });
  const recentActivtyFadeIn = useFadeInAnimation({
    duration: 400,
    delay: 400,
  });
  const pulse = usePulseAnimation({ scaleTo: 1.1, duration: 400 });
  const slideInY = useSlideInAnimation({
    fromY: -100,
    duration: 400,
  });

  const recentActivty: RecentActivityDataType[] = [
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
  const actions: QuickActionDataType[] = [
    {
      label: "Matches",
      link: "/matches",
      icon: <IconHeart size={18} withBackground />,
    },
    {
      label: "Profile",
      link: "/profile",
      icon: <IconProfile size={18} withBackground />,
    },
    {
      label: "Premium",
      link: "/premium",
      icon: <IconStar size={18} withBackground />,
    },
  ];
  useEffect(() => {
    if (isFocused) {
      // Reset animations whenever you revisit the Home screen
      findMatchfadeIn.reanimate?.();
      quickActionfadeIn.reanimate?.();
      recentActivtyFadeIn.reanimate?.();
      pulse.reanimate?.();
      slideInY.reanimate?.();
    }
  }, [isFocused]);
  return (
    <ScrollableScreenView>
      {/* Home Statistics & Profile */}
      <AnimatedThemedView style={[styles.header, slideInY.animate]}>
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
        <ThemedView style={styles.headerInner}>
          <ThemedView>
            <ThemedText type="title">Hey There!</ThemedText>
            <ThemedText type="subtitle">Hey, This is the subtitle?</ThemedText>
          </ThemedView>

          <TouchableOpacity style={styles.buttonAvatar}>
            <User2 size={24} color={"white"} />
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.headerStatsContainer}>
          <ThemedView style={styles.headerStatsBox}>
            <IconHeart size={20} />
            <ThemedText type="defaultSemiBold">34</ThemedText>
            <ThemedText type="subtitle">Total Matches</ThemedText>
          </ThemedView>
          <ThemedView style={styles.headerStatsBox}>
            <IconMessage size={20} />
            <ThemedText type="defaultSemiBold">7</ThemedText>
            <ThemedText type="subtitle">Active Chats</ThemedText>
          </ThemedView>
          <ThemedView style={styles.headerStatsBox}>
            <IconUsers size={20} />
            <ThemedText type="defaultSemiBold">2.3k</ThemedText>
            <ThemedText type="subtitle">Profile Views</ThemedText>
          </ThemedView>
        </ThemedView>
      </AnimatedThemedView>

      {/* Find Match Card */}
      <Animated.View
        style={[
          { marginVertical: 20, marginHorizontal: 20 },
          findMatchfadeIn.animate,
        ]}
      >
        <StyledCard style={{ padding: 16 }}>
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
              <ThemedText
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </ThemedText>
              <ThemedText
                style={{ textAlign: "center", color: "#eee", fontSize: 18 }}
              >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </ThemedText>
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
                <ThemedText style={{ color: "#fff", fontWeight: "600" }}>
                  Find
                </ThemedText>
              </Pressable>
            </Animated.View>
          </View>
        </StyledCard>
      </Animated.View>

      {/* Quick Actions */}
      <ThemedView style={{ marginHorizontal: 20 }}>
        <Animated.View style={[quickActionfadeIn.animate]}>
          <ThemedText type="defaultSemiBold" style={[{ marginVertical: 20 }]}>
            Quick Actions
          </ThemedText>
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
      </ThemedView>

      {/* Recent Activity */}
      <Animated.View
        style={[recentActivtyFadeIn.animate, { marginHorizontal: 20 }]}
      >
        <ThemedText
          type="defaultSemiBold"
          style={[{ marginTop: 20, marginBottom: 10 }]}
        >
          Recent Activity
        </ThemedText>
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
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
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
  buttonAvatar: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
