import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎉 Welcome to Rewards Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});

export default RewardsScreen;
