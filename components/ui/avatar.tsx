import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ThemedView } from "../themed-view";

type AvatarType = {
  uri: string;
  size: number;
};
export default function Avatar({ uri, size = 80 }: AvatarType) {
  return (
    <ThemedView
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});
