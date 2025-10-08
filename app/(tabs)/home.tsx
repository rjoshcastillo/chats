import { Card } from "@/components/card";
import { Colors } from "@/constants/theme";
import { Heart, MessageCircle, User2, Users2 } from "lucide-react-native";
import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

export default function HomeScreen() {
  const translateX = useSharedValue(100); // start off-screen to the right
  const translateY = useSharedValue(-100); // start off-screen from top
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateX.value = withSpring(0, {
      damping: 10,
      stiffness: 80,
      mass: 0.8,
    });
    translateY.value = withSpring(0, {
      damping: 10,
      stiffness: 80,
      mass: 0.8,
    });
    opacity.value = withTiming(1, { duration: 400 });
  }, []);

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
    opacity: opacity.value,
  }));
  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.header, containerStyle]}>
        <View style={styles.headerInner}>
          <View>
            <Text style={styles.greeting}>Hey There!</Text>
            <Text style={styles.subtitle}>Hey, This is the subtitle?</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingVertical: 30,
    paddingHorizontal: 20,
    height: 185,
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
  greeting: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
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
