import AnimatedScreen from "@/components/animated-screen";
import { Card } from "@/components/card";
import IconHeart from "@/components/icons/IconHeart";
import IconMessage from "@/components/icons/IconMessage";
import IconUsers from "@/components/icons/IconUsers";
import SettingOption from "@/components/molecules/profile/setting-option";
import ScrollableScreenView from "@/components/scrollable-screen-view";
import { StyledCard } from "@/components/styled-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Avatar from "@/components/ui/avatar";
import Pill from "@/components/ui/pill";
import ToggleSwitch from "@/components/ui/toggle-swtich";
import { Colors } from "@/constants/theme";
import { useThemeStore } from "@/stores/themeStore";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  ArrowRight,
  BellIcon,
  ImageIcon,
  LogOutIcon,
  MapPin,
  MoonIcon,
  SettingsIcon,
  ShieldIcon,
  StarIcon,
  Sun,
  UserRoundPenIcon,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
  const uri = "https://randomuser.me/api/portraits/men/1.jpg";
  const { theme, setTheme } = useThemeStore();
  const [isAllowNotification, setIsAllowNotification] =
    useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const images = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
  ];

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);
  return (
    <ScrollableScreenView>
      <AnimatedScreen>
        {/* Header */}
        <ThemedView style={styles.header}>
          <ThemedText
            style={[styles.headerTitle, { color: Colors[theme].tint }]}
          >
            Profile
          </ThemedText>
          <UserRoundPenIcon color={Colors[theme].tint} />
        </ThemedView>

        {/* Profile Card */}
        <Animated.View style={styles.cardContainer}>
          <StyledCard gradientColors={["#FF6B6B", "#FFD93D"]}>
            {/* Avatar + Name + Location */}
            <View style={styles.profileHeader}>
              <Avatar uri={uri} size={80} />
              <View style={{ flex: 1 }}>
                <Text style={styles.profileName}>Joshua Ramos</Text>
                <View style={styles.locationContainer}>
                  <MapPin size={18} color="#eee" />
                  <Text style={styles.locationText}>Guadalupe Makati PH</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                paddingHorizontal: 16,
                paddingBottom: 20,
              }}
            >
              {/* About */}
              <Text style={styles.aboutText}>
                Adventure seeker, coffee enthusiast, and weekend photographer.
                Always up for exploring new places and meeting interesting
                people! 📸 ☕ ✈️
              </Text>

              {/* Stats Section */}
              <View style={styles.headerStatsContainer}>
                <View style={styles.headerStatsBox}>
                  <IconHeart size={20} withBackground />
                  <ThemedText style={styles.statValue}>34</ThemedText>
                  <ThemedText style={styles.statLabel}>
                    Total Matches
                  </ThemedText>
                </View>
                <View style={styles.headerStatsBox}>
                  <IconMessage size={20} withBackground />
                  <ThemedText style={styles.statValue}>7</ThemedText>
                  <ThemedText style={styles.statLabel}>Active Chats</ThemedText>
                </View>
                <View style={styles.headerStatsBox}>
                  <IconUsers size={20} withBackground />
                  <ThemedText style={styles.statValue}>2.3k</ThemedText>
                  <ThemedText style={styles.statLabel}>
                    Profile Views
                  </ThemedText>
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
          <ThemedView>
            <Card>
              <View
                style={[
                  styles.settingsContainer,
                  { justifyContent: "space-between" },
                ]}
              >
                <View style={styles.settingsContainer}>
                  <ImageIcon size={20} color={Colors[theme].text} />
                  <ThemedText style={{ fontSize: 18, fontWeight: 600 }}>
                    Pictures
                  </ThemedText>
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
          </ThemedView>
        </Animated.View>
        {/* Settings */}
        <Animated.View style={styles.cardContainer}>
          <Card>
            <View style={styles.settingsContainer}>
              <SettingsIcon size={20} color={Colors[theme].text} />
              <ThemedText style={{ fontSize: 18, fontWeight: 600 }}>
                Settings
              </ThemedText>
            </View>
            <View style={{ paddingVertical: 25, gap: 30 }}>
              <SettingOption
                label="Notification"
                subLabel="Allow in-app notifications"
                icon={<BellIcon size={20} />}
                trigger={() => (
                  <ToggleSwitch
                    value={isAllowNotification ?? false}
                    onValueChange={(value) => setIsAllowNotification(value)}
                  ></ToggleSwitch>
                )}
              ></SettingOption>
              <SettingOption
                label="Theme Mode"
                subLabel={
                  isDarkMode
                    ? "Switch to light themes"
                    : "Switch to dark themes"
                }
                icon={isDarkMode ? <Sun size={20} /> : <MoonIcon size={20} />}
                trigger={() => (
                  <ToggleSwitch
                    value={isDarkMode ?? false}
                    onValueChange={(value) => {
                      setIsDarkMode(value);
                      setTheme(value ? "dark" : "light");
                    }}
                  ></ToggleSwitch>
                )}
              ></SettingOption>
              <SettingOption
                label="Privacy & Security"
                subLabel="Manage your account’s privacy"
                icon={<ShieldIcon size={20} />}
                trigger={() => (
                  <ArrowRight size={18} color={Colors[theme].text} />
                )}
              ></SettingOption>
              <SettingOption
                label="Get Premium"
                subLabel="Unlock exclusive features"
                icon={<StarIcon size={20} />}
                trigger={() => (
                  <LinearGradient
                    colors={["#FF6B6B", "#FFD93D"]}
                    style={styles.getPremiumButton}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Text style={styles.getPremiumButtonText}>Upgrade</Text>
                  </LinearGradient>
                )}
              ></SettingOption>
              <SettingOption
                label="Sign Out"
                subLabel="Log out of your account"
                icon={<LogOutIcon size={20} />}
                trigger={() => (
                  <LogOutIcon size={18} color={Colors[theme].text} />
                )}
              ></SettingOption>
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
  },
  headerTitle: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
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
    fontSize: 24,
    color: "#eee",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  locationText: {
    color: "#eee",
    fontSize: 16,
  },
  aboutText: {
    fontSize: 18,
    color: "#fff",
    marginTop: 20,
    paddingHorizontal: 10,
    lineHeight: 25,
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
    fontSize: 18,
    marginTop: 4,
    color: "#eee",
  },
  statLabel: {
    fontSize: 16,
    color: "#eee",
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
    color: '#eee'
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
