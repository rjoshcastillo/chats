import AnimatedScreen from "@/components/animated-screen";
import { ThemedCard } from "@/components/themed-card";
import { ArrowLeft, UserRoundPenIcon } from "lucide-react-native";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <AnimatedScreen>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          shadowColor: "#000",
          shadowOpacity: 0.4,
          shadowRadius: 4,
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}
      >
        <ArrowLeft color="#555" />
        <Text style={{ fontSize: 16, fontWeight: 600 }}>Profile</Text>
        <UserRoundPenIcon color="#555" />
      </View>
      <Animated.View style={[{ marginVertical: 20, marginHorizontal: 20 }]}>
        <ThemedCard>
          <Text>Profile</Text>
        </ThemedCard>
      </Animated.View>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
