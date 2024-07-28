import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  type ViewProps,
} from "react-native";

import CustomParallaxView from "@/components/servers/CustomParallaxView";
import { theme } from "@/constants/theme";
import { hp } from "@/constants/common";
import { useRouter } from "expo-router";
import {
  MagnifyingGlassIcon,
  UserPlusIcon,
  CalendarIcon,
} from "react-native-heroicons/solid";
import ChannelsList from "@/components/servers/ChannelsList";
import { useColorScheme } from "react-native";

export type ServerPanelProps = ViewProps & {
  channelsList?: any;
};

const ServerPanel = ({ channelsList }: ServerPanelProps) => {
  const isDarkTheme = useColorScheme() == "dark";
  const lessDark = isDarkTheme ? theme.dark.bgLessDark : theme.light.bgLessDark;
  const textColor = isDarkTheme ? theme.colors.white : theme.colors.black;
  const serverinfoBorderColor = isDarkTheme ? "#24272f" : "#eaecef";
  const searchButtonColor = isDarkTheme ? "#383a43" : "#f5f5f5";
  const searchButtonTextColor = isDarkTheme
    ? theme.colors.white
    : theme.colors.black;
  const iconColor = isDarkTheme ? "#c2c3c9" : "#303238";
  const router = useRouter();

  const handleNavigateToChat = () => {
    router.push("/chat");
  };

  return (
    <View style={[styles.rightScrollable, { backgroundColor: lessDark }]}>
      <CustomParallaxView
        headerBackgroundColor={{
          light: theme.light.bgLessDark,
          dark: theme.dark.bgLessDark,
        }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <ScrollView
          contentContainerStyle={[
            styles.rightScrollableContent,
            { backgroundColor: lessDark },
          ]}
          stickyHeaderIndices={[0]}
        >
          <View
            style={[styles.serverInfo, { borderColor: serverinfoBorderColor }]}
          >
            <Text style={[styles.serverName, { color: textColor }]}>
              Server name
            </Text>
            <View style={styles.serverQuickActions}>
              <Pressable
                onPress={() => router.push("")}
                style={[
                  styles.searchButton,
                  { backgroundColor: searchButtonColor },
                ]}
              >
                <MagnifyingGlassIcon size={22} color={iconColor} />
                <Text
                  style={[
                    styles.searchButtonText,
                    { color: searchButtonTextColor },
                  ]}
                >
                  Search
                </Text>
              </Pressable>
              <Pressable
                onPress={() => router.push("")}
                style={[
                  styles.smallButton,
                  { backgroundColor: searchButtonColor },
                ]}
              >
                <Text
                  style={[
                    styles.smallButtonText,
                    { color: searchButtonTextColor },
                  ]}
                >
                  <UserPlusIcon size={20} color={iconColor} />
                </Text>
              </Pressable>
              <Pressable
                onPress={() => router.push("")}
                style={[
                  styles.smallButton,
                  { backgroundColor: searchButtonColor },
                ]}
              >
                <Text
                  style={[
                    styles.smallButtonText,
                    { color: searchButtonTextColor },
                  ]}
                >
                  <CalendarIcon size={20} color={iconColor} />
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={{ marginBottom: 15 }}></View>
          <ChannelsList channelsList={channelsList} />
        </ScrollView>
      </CustomParallaxView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  rightScrollable: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  rightScrollableContent: {
    flexGrow: 1,
  },
  serverInfo: {
    borderBottomWidth: 1,
  },
  serverName: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize: hp(2),
    fontWeight: 600,
  },
  serverQuickActions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    marginTop: 10,
    borderRadius: theme.radius.xl3,
    borderCurve: "continuous",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
  },
  searchButtonText: {
    fontSize: hp(1.5),
    fontWeight: 500,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0.1,
  },
  smallButton: {
    height: 34,
    marginRight: 15,
    marginBottom: 15,
    marginTop: 10,
    padding: 7,
    borderRadius: theme.radius.xl3,
    borderCurve: "continuous",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
  },
  smallButtonText: {
    marginTop: 2,
    fontSize: hp(1.3),
    fontWeight: 600,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0.1,
  },
});

export default ServerPanel;
