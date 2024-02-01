import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./style/productCardView.style";
import { SIZES } from "../../../infrastructure/theme";

export const ProductCardView = () => {
  return (
    <View style={{ marginBottom: SIZES.xxLarge + 40 }}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
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
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
