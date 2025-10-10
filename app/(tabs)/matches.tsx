import ScreenWrapper from "@/components/screen-wrapper";
import { Colors } from "@/constants/theme";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";

export default function MatchesScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: Colors["--red-500"]}}>5</Text>
          <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
            Total Matches
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text  style={{ color: Colors["--blue-500"]}}>18</Text>
          <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
            Total Matches
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text  style={{ color: Colors["--green-500"]}}>3</Text>
          <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
            Total Matches
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
