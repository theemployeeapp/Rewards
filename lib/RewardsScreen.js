import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const RewardsScreen = () => {
    return (_jsx(View, { style: styles.container, children: _jsx(Text, { style: styles.text, children: "\uD83C\uDF89 Welcome to Rewards Screen!" }) }));
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
//# sourceMappingURL=RewardsScreen.js.map