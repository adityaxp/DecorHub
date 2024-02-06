import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./style/productCardView.style";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: SIZES.xxLarge + 40 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetailsScreen")}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.productTitle} numberOfLines={1}>
              Product
            </Text>
            <Text style={styles.productSupplier} numberOfLines={1}>
              Supplier
            </Text>
            <Text style={styles.productPrice}>$100</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
