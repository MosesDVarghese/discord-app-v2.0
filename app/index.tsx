import { Image, StyleSheet, View, Text, Pressable } from "react-native";

import { theme } from "@/constants/theme";
import { hp, wp } from "@/constants/common";
import { useRouter } from "expo-router";
import { useColorScheme } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  const isDarkTheme = useColorScheme() == "dark";
  const imageSrc = isDarkTheme
    ? require("@/assets/images/welcome-icons-dark.jpg")
    : require("@/assets/images/welcome-icons-light.jpg");
  const mainBgColor = isDarkTheme ? theme.dark.bgNormal : theme.light.bgNormal;
  const textColor = isDarkTheme ? theme.colors.white : theme.colors.black;
  const registerButtonColor = theme.purples.default;
  const loginButtonColor = isDarkTheme ? "#383a43" : "#f5f5f5";
  const loginButtonTextColor = isDarkTheme
    ? theme.colors.white
    : theme.colors.black;

  return (
    <View style={[styles.container, { backgroundColor: mainBgColor }]}>
      <View style={styles.contentContainer}>
        <Image source={imageSrc} style={styles.bgIconsImg} />
        <Text style={[styles.title, { color: textColor }]}>
          Welcome to Discord
        </Text>
        <Text style={[styles.punchline, { color: textColor }]}>
          Join over 100 million people who use Discord to talk with communities
          and friends.
        </Text>
        <View style={{ paddingBottom: hp(3) }}></View>
        <Pressable
          onPress={() => router.push("register")}
          style={[styles.button, { backgroundColor: registerButtonColor }]}
        >
          <Text style={[styles.buttonText, { color: theme.colors.white }]}>
            Register
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("login")}
          style={[styles.button, { backgroundColor: loginButtonColor }]}
        >
          <Text style={[styles.buttonText, { color: loginButtonTextColor }]}>
            Log In
          </Text>
        </Pressable>
      </View>
      <View style={{ paddingBottom: hp(7) }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  bgIconsImg: {
    width: wp(90),
    height: hp(55),
  },
  title: {
    fontSize: hp(2.7),
    fontWeight: 800,
  },
  punchline: {
    fontSize: hp(1.3),
    marginLeft: wp(16),
    marginRight: wp(16),
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 400,
    letterSpacing: 0.1,
  },
  button: {
    padding: 13,
    width: wp(90),
    borderRadius: theme.radius.xl3,
    borderCurve: "continuous",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  buttonText: {
    fontSize: hp(1.3),
    fontWeight: 600,
    justifyContent: "center",
    textAlign: "center",
  },
});
