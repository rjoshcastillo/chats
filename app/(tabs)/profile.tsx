import AnimatedScreen from "@/components/animated-screen";
import { Card } from "@/components/card";
import ScrollableScreenView from "@/components/scrollable-screen-view";
import { StyledCard } from "@/components/styled-card";
import Avatar from "@/components/ui/avatar";
import Pill from "@/components/ui/pill";
import ToggleSwitch from "@/components/ui/toggle-swtich";
import { Colors } from "@/constants/theme";
import { SETTING_CTA } from "@/types/enums";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  ArrowRight,
  BellIcon,
  Heart,
  ImageIcon,
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
import { ReactNode, useEffect, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type settingListDataType = {
  icon: ReactNode;
  label: string;
  subLabel: string;
  cta: string | ReactNode;
  value?: boolean;
};
export default function ProfileScreen() {
  const uri = "https://randomuser.me/api/portraits/men/1.jpg";
  const [settingListData, setSettingListData] = useState<settingListDataType[]>(
    [
      {
        icon: <BellIcon size={20} />,
        label: "Notifications",
        subLabel: "Allow in-app notifications",
        cta: "toggle",
        value: false,
      },
      {
        icon: <MoonIcon size={20} />,
        label: "Dark Mode",
        subLabel: "Switch to dark themes",
        cta: "toggle",
        value: false,
      },
      {
        icon: <ShieldIcon size={20} />,
        label: "Privacy & Security",
        subLabel: "Manage your account’s privacy",
        cta: <ArrowRight size={18} color="#aaa" />,
      },
      {
        icon: <StarIcon size={20} />,
        label: "Get Premium",
        subLabel: "Unlock exclusive features",
        cta: (
          <LinearGradient
            colors={["#FF6B6B", "#FFD93D"]}
            style={styles.getPremiumButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.getPremiumButtonText}>Upgrade</Text>
          </LinearGradient>
        ),
      },
      {
        icon: <LogOutIcon size={20} />,
        label: "Sign Out",
        subLabel: "Log out of your account",
        cta: <LogOutIcon size={18} color="#aaa" />,
      },
    ]
  );

  const images = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
  ];

  const onSettingValueChange = (
    item: settingListDataType,
    newValue: boolean
  ) => {
    setSettingListData((prev) =>
      prev.map((setting) =>
        setting.label === item.label ? { ...setting, value: newValue } : setting
      )
    );
  };
  useEffect(() => {
    console.log("Updated settings:", settingListData);
  }, [settingListData]);
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
          <StyledCard>
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
          </StyledCard>
        </Animated.View>

        {/* Pictures */}
        <Animated.View style={styles.cardContainer}>
          <Card>
            <View
              style={[
                styles.settingsContainer,
                { justifyContent: "space-between" },
              ]}
            >
              <View style={styles.settingsContainer}>
                <ImageIcon size={20} />
                <Text style={{ fontSize: 18, fontWeight: 600 }}>Pictures</Text>
              </View>
              <Pressable>
                <Text style={{ color: "#1565C0" }}>View more</Text>
              </Pressable>
            </View>

            <View style={styles.gallery}>
              {images.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.image} />
              ))}
            </View>
          </Card>
        </Animated.View>
        {/* Settings */}
        <Animated.View style={styles.cardContainer}>
          <Card>
            <View style={styles.settingsContainer}>
              <SettingsIcon size={20} />
              <Text style={{ fontSize: 18, fontWeight: 600 }}>Settings</Text>
            </View>
            <View style={{ paddingVertical: 25, gap: 30 }}>
              {settingListData.map((item, index) => (
                <View
                  key={index}
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
                      {item.icon}
                    </View>
                    <View style={{ flexShrink: 1 }}>
                      <View>
                        <Text style={{ fontSize: 16 }}>{item.label}</Text>
                        <Text style={{ color: "#aaa", fontSize: 14 }}>
                          {item.subLabel}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    {item.cta === SETTING_CTA.TOGGLE && (
                      <ToggleSwitch
                        key={item.label}
                        value={item?.value ?? false}
                        onValueChange={(value) =>
                          onSettingValueChange(item, value)
                        }
                      ></ToggleSwitch>
                    )}
                    {item.cta !== SETTING_CTA.TOGGLE && item.cta}
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
    marginVertical: 20,
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
    alignItems: "center",
    gap: 10,
  },
  settingItemListContainer: {},
  getPremiumButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 10,
    alignItems: "center",
  },
  getPremiumButtonText: {
    color: "#fff",
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 10,
  },
  image: {
    width: "30%",
    height: 80,
    borderRadius: 10,
  },
});
