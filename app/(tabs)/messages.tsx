import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MessagesScreen = () => {
  return (
    <View>
      <Text>Search Button</Text>
      <Text>horizontal scroll pane</Text>
      <Text>vertical scroll pane</Text>
      <Text>chat button (floating)</Text>
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
  categoryName: { fontWeight: 600 },
});

export default MessagesScreen;
