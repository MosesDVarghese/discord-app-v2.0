import { Image, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { useColorScheme } from "react-native";

import { hp, wp } from "@/constants/common";
import { data } from "@/constants/data/ServerData";

const ServerList = () => {
  const isDarkTheme = useColorScheme() == "dark";
  const selectedServerIcon = isDarkTheme
    ? require("@/assets/images/ServerIcons/selected_server_icon-dark.jpg")
    : require("@/assets/images/ServerIcons/selected_server_icon-light.jpg");

  const notificationIcon = isDarkTheme
    ? require("@/assets/images/ServerIcons/server_notification_icon-dark.jpg")
    : require("@/assets/images/ServerIcons/server_notification_icon-light.jpg");
  const serverProfiles = data.serverProfiles;
  const [selectedProfileId, setSelectedProfileId] = useState(0);

  const handleProfilePress = (profileId: number) => {
    setSelectedProfileId(profileId);
    // console.log(selectedProfileId);
  };

  return (
    <View style={styles.leftScrollable}>
      <ScrollView
        contentContainerStyle={styles.leftScrollableContent}
        showsVerticalScrollIndicator={true}
      >
        {serverProfiles.map((item) => (
          <Pressable key={item.id} onPress={() => handleProfilePress(item.id)}>
            {item.id == selectedProfileId ? (
              <View style={styles.serverContainer}>
                <Image
                  source={selectedServerIcon}
                  style={styles.selectedServerIcon}
                />
                <Image
                  source={item.iconPath}
                  style={[styles.server, { borderRadius: 13 }]}
                />
              </View>
            ) : item.notification ? (
              <View style={styles.serverContainer}>
                <Image
                  source={notificationIcon}
                  style={styles.notificationIcon}
                />
                <Image
                  source={item.iconPath}
                  style={[styles.server, { borderRadius: 25 }]}
                />
              </View>
            ) : (
              <View style={[styles.serverContainer, { marginLeft: wp(3.65) }]}>
                <Image
                  source={item.iconPath}
                  style={[styles.server, { borderRadius: 25 }]}
                />
              </View>
            )}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  leftScrollable: {
    width: wp(17.5),
  },
  leftScrollableContent: {
    flexGrow: 1,
  },
  serverContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
  selectedServerIcon: {
    height: 42,
    width: 4.2,
    marginRight: wp(2.7),
  },
  server: {
    width: 47,
    height: 47,
  },
  notificationIcon: {
    height: 8.2,
    width: 4.2,
    marginRight: wp(2.7),
  },
  rightScrollable: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 10,
  },
  rightScrollableContent: {
    flexGrow: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 10,
  },
});

export default ServerList;
