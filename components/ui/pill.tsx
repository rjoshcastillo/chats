import { View, Text } from "react-native";

interface PillProps {
  label: string;
  color: string;
  textColor: string;
}
export default function Pill({
  label,
  color = "#eee",
  textColor = "#333",
}: PillProps) {
  return (
    <View
      style={{
        backgroundColor: color,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
      }}
    >
      <Text style={{ color: textColor, fontSize: 12, fontWeight: "500" }}>
        {label}
      </Text>
    </View>
  );
}
