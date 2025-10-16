import AnimatedScreen from "@/components/animated-screen";
import { Card } from "@/components/card";
import ScrollableScreenView from "@/components/scrollable-screen-view";
import { ThemedCard } from "@/components/themed-card";
import Avatar from "@/components/ui/avatar";
import Pill from "@/components/ui/pill";
import { Colors } from "@/constants/theme";
import {
  ArrowLeft,
  BellIcon,
  Heart,
  LogOutIcon,
  MapPin,
  MessageCircle,
  MoonIcon,
  SettingsIcon,
  ShieldIcon,
  StarIcon,
  UserRoundPenIcon,
  Users2,
} from "lucide-react-native";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const uri = "https://randomuser.me/api/portraits/men/1.jpg";

  const settingListData = [
    {
      icon: <BellIcon size={20} />,
      label: "Notifications",
      subLabel: "Get notified about matches and messages",
    },
    {
      icon: <MoonIcon size={20} />,
      label: "Dark Mode",
      subLabel: "Switch between light and dark themes",
    },
    {
      icon: <ShieldIcon size={20} />,
      label: "Privacy & Security",
      subLabel: "Manage your account’s privacy settings",
    },
    {
      icon: <StarIcon size={20} />,
      label: "Get Premium",
      subLabel: "Unlock exclusive features and boosts",
    },
    {
      icon: <LogOutIcon size={20} />,
      label: "Sign Out",
      subLabel: "Log out of your account",
    },
  ];
  return (
    <ScrollableScreenView>
      <AnimatedScreen>
        {/* Header */}
        <View style={styles.header}>
          <ArrowLeft color="#555" />
          <Text style={styles.headerTitle}>Profile</Text>
          <UserRoundPenIcon color="#555" />
        </View>

        {/* Profile Card */}
        <Animated.View style={styles.cardContainer}>
          <ThemedCard>
            {/* Avatar + Name + Location */}
            <View style={styles.profileHeader}>
              <Avatar uri={uri} size={80} />
              <View style={{ flex: 1 }}>
                <Text style={styles.profileName}>Joshua Ramos</Text>
                <View style={styles.locationContainer}>
                  <MapPin size={18} color="#3a3a3a" />
                  <Text style={styles.locationText}>Guadalupe Makati PH</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 16,
                paddingBottom: 20,
              }}
            >
              {/* About */}
              <Text style={styles.aboutText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

              {/* Stats Section */}
              <View style={styles.headerStatsContainer}>
                <View style={styles.headerStatsBox}>
                  <Heart color={Colors["--red-500"]} />
                  <Text style={styles.statValue}>34</Text>
                  <Text style={styles.statLabel}>Total Matches</Text>
                </View>
                <View style={styles.headerStatsBox}>
                  <MessageCircle color={Colors["--blue-500"]} />
                  <Text style={styles.statValue}>7</Text>
                  <Text style={styles.statLabel}>Active Chats</Text>
                </View>
                <View style={styles.headerStatsBox}>
                  <Users2 color={Colors["--green-500"]} />
                  <Text style={styles.statValue}>2.3k</Text>
                  <Text style={styles.statLabel}>Profile Views</Text>
                </View>
              </View>

              {/* Interests */}
              <View style={{ marginTop: 24 }}>
                <Text style={styles.sectionTitle}>Interests</Text>
                <View style={styles.interestsContainer}>
                  {[
                    "Lorem",
                    "Ipsum",
                    "Gratia",
                    "Dolor",
                    "Sit",
                    "Amet",
                    "Music",
                    "Travel",
                    "Photography",
                    "Coding",
                  ].map((interest, i) => (
                    <Pill
                      key={i}
                      label={interest}
                      color="#E3F2FD"
                      textColor="#1565C0"
                    />
                  ))}
                </View>
              </View>
            </View>
          </ThemedCard>
        </Animated.View>
        <Animated.View style={styles.cardContainer}>
          <Card>
            <View style={styles.settingsContainer}>
              <SettingsIcon size={20} />
              <Text style={{ fontSize: 18, fontWeight: 600}}>Settings</Text>
            </View>
            <View style={{ paddingVertical: 25, gap: 30 }}>
              {settingListData.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
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
                    {item.icon}
                  </View>
                  <View style={{ flexShrink: 1 }}>
                    <Text style={{ fontSize: 16 }}>{item.label}</Text>
                    <Text style={{ color: "#aaa", fontSize: 14 }}>
                      {item.subLabel}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </Card>
        </Animated.View>
      </AnimatedScreen>
    </ScrollableScreenView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  cardContainer: {
    margin: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 10,
  },
  profileName: {
    fontWeight: "600",
    fontSize: 20,
    color: "#3a3a3a",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  locationText: {
    color: "#3a3a3a",
    fontSize: 14,
  },
  aboutText: {
    color: "#444",
    fontSize: 14,
    marginTop: 20,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  headerStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 24,
  },
  headerStatsBox: {
    alignItems: "center",
    width: 100,
    borderRadius: 10,
    marginVertical: 20
  },
  statValue: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  settingsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  settingItemListContainer: {

  }
});
