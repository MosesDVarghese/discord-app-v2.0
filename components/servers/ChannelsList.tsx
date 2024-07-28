import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  type ViewProps,
} from "react-native";
import React from "react";
import Channel from "./Channel";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { theme } from "@/constants/theme";
import { hp } from "@/constants/common";

export type ChannelsListProps = ViewProps & {
  channelsList?: any;
};

const ChannelsList = ({ channelsList }: ChannelsListProps) => {
  const isDarkTheme = useColorScheme() == "dark";
  const catColor = isDarkTheme ? theme.dark.grayMedium : theme.light.grayMedium;
  const length = channelsList.length;
  const [selectedArr, setSelectedArr] = useState(Array(length).fill(false));

  return (
    <View>
      {channelsList.map((category: any) => {
        const isNoCategory = category.name === "noCategory";
        const categoryId = category.id;
        const categoryName = category.name;
        const channels = category.channels;
        const [activeChannel, setActiveChannel] = useState(0);
        const [isOpen, setIsOpen] = useState(true);

        return isNoCategory ? (
          <View key={categoryId}>
            {channels.map((channel: any) => {
              return (
                <Pressable
                  key={channel.id}
                  onPress={() => {
                    const updatedSelectedArr = selectedArr.map(
                      (value, index) => index === categoryId - 1
                    );
                    console.log(updatedSelectedArr);
                    console.log(channel.id);
                    setSelectedArr(updatedSelectedArr);
                    setActiveChannel(channel.id);
                  }}
                >
                  <Channel
                    name={channel.name}
                    type={channel.type}
                    active={
                      activeChannel === channel.id &&
                      selectedArr[categoryId - 1]
                    }
                    notification={channel.notification}
                  />
                </Pressable>
              );
            })}
          </View>
        ) : (
          <View key={categoryId}>
            <TouchableOpacity
              style={styles.heading}
              onPress={() => setIsOpen((value) => !value)}
              activeOpacity={0.8}
            >
              <Ionicons
                name={isOpen ? "chevron-down" : "chevron-forward-outline"}
                size={hp(1.2)}
                color={catColor}
              />
              <Text style={[styles.categoryName, { color: catColor }]}>
                {categoryName}
              </Text>
            </TouchableOpacity>
            <View style={{ marginBottom: 10 }}></View>
            {isOpen ? (
              <View>
                {channels.map((channel: any) => (
                  <Pressable
                    key={channel.id}
                    onPress={() => {
                      const updatedSelectedArr = selectedArr.map(
                        (value, index) => index === categoryId - 1
                      );
                      console.log(updatedSelectedArr);
                      console.log(channel.id);
                      setSelectedArr(updatedSelectedArr);
                      setActiveChannel(channel.id);
                    }}
                  >
                    <Channel
                      name={channel.name}
                      type={channel.type}
                      active={
                        activeChannel === channel.id &&
                        selectedArr[categoryId - 1]
                      }
                      notification={channel.notification}
                    />
                  </Pressable>
                ))}
              </View>
            ) : (
              <View key={categoryId}>
                {channels
                  .filter(
                    (channel: any) =>
                      channel.notification || channel.id === activeChannel
                  ) // Filter channels where notification is true or id matches activeChannel
                  .map((channel: any) => (
                    <Pressable
                      key={channel.id}
                      onPress={() => {
                        const updatedSelectedArr = selectedArr.map(
                          (value, index) => index === categoryId - 1
                        );
                        console.log(updatedSelectedArr);
                        console.log(channel.id);
                        setSelectedArr(updatedSelectedArr);
                        setActiveChannel(channel.id);
                      }}
                    >
                      <Channel
                        name={channel.name}
                        type={channel.type}
                        active={
                          activeChannel === channel.id &&
                          selectedArr[categoryId - 1]
                        }
                        notification={channel.notification}
                      />
                    </Pressable>
                  ))}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginLeft: 3,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
  categoryName: { fontWeight: 600, fontSize: hp(1.4) },
});

export default ChannelsList;
