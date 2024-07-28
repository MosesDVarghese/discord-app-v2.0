import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/constants/common";
import { useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

import { useState } from "react";

const RegisterScreen = () => {
  const router = useRouter();
  const isDarkTheme = useColorScheme() == "dark";
  const mainBgColor = isDarkTheme ? theme.dark.bgNormal : theme.light.bgNormal;
  const textColor = isDarkTheme ? theme.colors.white : theme.colors.black;
  const loginButtonColor = theme.purples.default;
  const loginButtonTextColor = theme.colors.white;
  const inputButtonColor = isDarkTheme ? "#30333b" : "#e2e5e9";
  const inputButtonTextColor = isDarkTheme ? "#808490" : "#5d5e67";

  const [registerMethod, setRegisterMethod] = useState(0);
  const methodText = registerMethod === 0 ? "Phone Number" : "Email";

  return (
    <View style={[styles.container, { backgroundColor: mainBgColor }]}>
      <SafeAreaView>
        <Pressable onPress={() => router.back()}>
          <ArrowLeftIcon
            style={{ marginBottom: 25 }}
            size={25}
            color={textColor}
          />
        </Pressable>
        <Text style={[styles.title, { color: textColor }]}>
          Enter phone or email
        </Text>
        <Text
          style={[
            styles.punchline,
            {
              color: inputButtonTextColor,
              textAlign: "left",
              marginBottom: 10,
            },
          ]}
        >
          Account Information
        </Text>
        <Pressable
          onPress={() => {}}
          style={[styles.button, { backgroundColor: inputButtonColor }]}
        >
          <Text style={[styles.inputText, { color: inputButtonTextColor }]}>
            Email or Phone Number
          </Text>
        </Pressable>
        <Pressable>
          <Text
            style={[
              styles.punchline,
              {
                color: "#01a6f5",
                textAlign: "left",
                marginBottom: 15,
                fontWeight: 400,
              },
            ]}
          >
            View our Privacy Policy
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("(tabs)")}
          style={[styles.button, { backgroundColor: loginButtonColor }]}
        >
          <Text style={[styles.buttonText, { color: loginButtonTextColor }]}>
            Next
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: hp(2.7),
    fontWeight: 800,
    textAlign: "center",
    marginBottom: 13,
  },
  punchline: {
    fontSize: hp(1.4),
    fontWeight: 500,
    letterSpacing: 0.1,
  },
  button: {
    padding: 13,
    width: wp(90),
    borderRadius: 4,
    borderCurve: "continuous",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    marginBottom: 8,
  },
  inputText: {
    fontSize: hp(1.6),
    fontWeight: 400,
    // justifyContent: "center",
    // textAlign: "center",
  },
  buttonText: {
    fontSize: hp(1.3),
    fontWeight: 600,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default RegisterScreen;
