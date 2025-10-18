import { ThemedText } from "@/components/themed-text";
import { JSX, ReactNode } from "react";
import { View, Text, Pressable } from "react-native";

type SettingOptionType = {
  label: string;
  subLabel: string;
  icon: ReactNode;
  trigger: () => JSX.Element;
};
export default function SettingOption({
  label,
  subLabel,
  icon,
  trigger,
}: SettingOptionType) {
  return (
    <Pressable
      onPress={() => {
        alert('pressu');
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            backgroundColor: "#eee",
            width: 40,
            height: 40,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </View>
        <View style={{ flexShrink: 1 }}>
          <View>
            <ThemedText style={{ fontSize: 16 }}>{label}</ThemedText>
            <ThemedText style={{ fontSize: 14 }}>{subLabel}</ThemedText>
          </View>
        </View>
      </View>
      {trigger()}
    </Pressable>
  );
}
