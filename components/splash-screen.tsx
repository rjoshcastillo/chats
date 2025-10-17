import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import { StyledCard } from "./styled-card";
import { Heart } from "lucide-react-native";
import { usePulseAnimation } from "@/hooks/use-pulse-animation";
import Animated from "react-native-reanimated";
import { useBounceAnimation } from "@/hooks/use-bounce-animation";

export default function SplashScreen() {
  const router = useRouter();
  const pulse = usePulseAnimation({ scaleTo: 1.1, duration: 600, delay: 300 });

  const dots = [
    useBounceAnimation({ fromY: 5, delay: 0 }),
    useBounceAnimation({ fromY: 5, delay: 100 }),
    useBounceAnimation({ fromY: 5, delay: 200 }),
    useBounceAnimation({ fromY: 5, delay: 300 }),
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledCard style={{ borderRadius: 0, flex: 1 }}>
      <View style={styles.container}>
        <Animated.View style={[pulse.animate]}>
          <Heart fill="#fff" size={60} color="#fff" />
        </Animated.View>
        <Text style={[styles.title]}>Affiny</Text>
        <Text style={styles.label}>More than a match — it’s Affiny.</Text>
        <View style={{ flexDirection: "row", marginTop: 20, gap: 4 }}>
          {dots.map((dot, i) => (
            <Animated.View
              key={i}
              style={[
                dot.animate,
                {
                  backgroundColor: "#dedd91ff",
                  borderRadius: 10,
                  width: 8,
                  height: 8,
                },
              ]}
            />
          ))}
        </View>
      </View>
    </StyledCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartIcon: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    color: "#eee",
    fontWeight: 600,
  },
  label: {
    color: "#eee",
  },
});
