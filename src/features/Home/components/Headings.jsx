import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles/headings.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../infrastructure/theme";
import { useNavigation } from "@react-navigation/native";

export const Headings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
          <Ionicons name="grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
