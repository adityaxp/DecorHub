import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./style/productCardView.style";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ProductCardView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginEnd: 5 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetailsScreen", { item })}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.productTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.productSupplier} numberOfLines={1}>
              {item.supplier}
            </Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
