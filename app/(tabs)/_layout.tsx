import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import {
  HomeModernIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { theme } from "@/constants/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDarkTheme = useColorScheme() == "dark";
  const tabBarBgColor = isDarkTheme ? theme.dark.bgLight : theme.light.bgLight;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tabBarBgColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Servers",
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon
            //   name={focused ? "home" : "home-outline"}
            //   color={color}
            // />
            <HomeModernIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) => (
            <ChatBubbleOvalLeftIcon color={color} />
          ),
          headerShown: true,
          headerStyle: {
            height: 113,
          },
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => <BellIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="you"
        options={{
          title: "You",
          tabBarIcon: ({ color, focused }) => <UserCircleIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
