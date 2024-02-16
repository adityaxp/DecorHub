import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../infrastructure/theme";

export const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name="chevron-back-circle"
        size={30}
        color={COLORS.primary}
        style={styles.backButton}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginHorizontal: 5,
    position: "absolute",
    zIndex: 999,
    top: SIZES.large - 10,
    alignItems: "center",
  },
});
