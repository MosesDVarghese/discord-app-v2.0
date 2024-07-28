import React from "react";
import { View, Text, StyleSheet, type ViewProps } from "react-native";
import {
  SpeakerWaveIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  HashtagIcon,
} from "react-native-heroicons/solid";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";

export type ChannelProps = ViewProps & {
  name?: string;
  type?: string;
  active?: boolean;
  notification?: boolean;
};

const Channel = ({ name, type, active, notification }: ChannelProps) => {
  const isDarkTheme = useColorScheme() == "dark";
  const channelActiveBgColor = isDarkTheme
    ? theme.dark.bgLesserDark
    : theme.light.bgLesserDark;
  const channelPassiveBgColor = isDarkTheme
    ? theme.dark.bgLessDark
    : theme.light.bgLessDark;
  const channelActiveColor = isDarkTheme ? "#ebeaea" : "#171717";
  const channelPassiveColor = isDarkTheme ? "#818590" : "#6c6e78";
  const channelNotificationColor = isDarkTheme ? "#f2f2f4" : "#060706";
  const channelColor = active
    ? channelActiveColor
    : notification
    ? channelNotificationColor
    : channelPassiveColor;
  const isRules = type === "rules";
  const isAnnouncement = type === "announcements";
  const isText = type === "text";
  const isVoice = type === "voice";
  const iconMargin = isVoice ? 6 : 10;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.channelBorder,
          {
            backgroundColor: active
              ? channelActiveBgColor
              : channelPassiveBgColor,
          },
        ]}
      >
        <View style={styles.channelContent}>
          {isAnnouncement ? (
            <MegaphoneIcon
              size={20}
              color={channelColor}
              style={{ marginRight: iconMargin - 4 }}
            />
          ) : isRules ? (
            <ShieldCheckIcon
              size={20}
              color={channelColor}
              style={{ marginRight: iconMargin - 4 }}
            />
          ) : isVoice ? (
            <SpeakerWaveIcon
              size={20}
              color={channelColor}
              style={{ marginRight: iconMargin }}
            />
          ) : isText ? (
            <HashtagIcon
              size={20}
              color={channelColor}
              style={{ marginRight: iconMargin - 4 }}
            />
          ) : (
            <Ionicons
              name={"chatbubbles"}
              size={16}
              color={channelColor}
              style={{ marginRight: iconMargin }}
            />
          )}
          <Text
            style={{
              color: channelColor,
              fontWeight: 600,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column-reverse" },
  channelBorder: {
    height: 34,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 1,
    padding: 7,
    borderRadius: theme.radius.sm,
  },
  channelContent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 2,
  },
});

export default Channel;
