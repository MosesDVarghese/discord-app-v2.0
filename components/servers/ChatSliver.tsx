import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";

import { theme } from "@/constants/theme";

const ChatSliver = () => {
  const isDarkTheme = useColorScheme() == "dark";
  const lessDark = isDarkTheme ? theme.dark.bgLessDark : theme.light.bgLessDark;

  return (
    <View style={[styles.chatSliver, { backgroundColor: lessDark }]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  serverBox: {
    flex: 1,
    flexDirection: "row",
  },
  leftScrollable: {
    width: 60,
    marginLeft: 10,
  },
  leftScrollableContent: {
    flexGrow: 1,
  },
  circle: {
    width: 47,
    height: 47,
    borderRadius: 25,
    backgroundColor: "grey",
    marginBottom: 7,
  },
  chatSliver: {
    // flex: 1,
    width: 20,
    borderTopLeftRadius: 10,
    marginLeft: 10,
  },
});

export default ChatSliver;
