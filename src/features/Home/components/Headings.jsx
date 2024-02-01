import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles/headings.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../infrastructure/theme";

export const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Ionicons name="grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
