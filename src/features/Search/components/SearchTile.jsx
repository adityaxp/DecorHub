import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles/searchTile.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const SearchTile = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("ProductDetailsScreen", { item })}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productSupplier}>{item.supplier}</Text>
        </View>
        <Ionicons name="location-outline" size={20} />
        <Text style={styles.productSupplier}> {item.product_location}</Text>
      </TouchableOpacity>
    </View>
  );
};
