import { StyleSheet, View } from "react-native";

import { theme } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import ServerPanel from "@/components/servers/ServerPanel";
import ServerList from "@/components/servers/ServerList";
import ChatSliver from "@/components/servers/ChatSliver";
import { data } from "@/constants/data/ServerData";
import { useColorScheme } from "react-native";

export default function HomeScreen() {
  const isDarkTheme = useColorScheme() == "dark";
  const mainBgColor = isDarkTheme ? theme.dark.bgDark : theme.light.bgDark;
  const channelsList = data.channelsList;

  return (
    <SafeAreaView
      edges={["right", "left", "top"]}
      style={[styles.container, { backgroundColor: mainBgColor }]}
    >
      <View style={styles.serverBox}>
        <ServerList />
        <ServerPanel channelsList={channelsList} />
        <ChatSliver />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  serverBox: {
    flex: 1,
    flexDirection: "row",
  },
});
