import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useFetch } from "../../../services/hooks/useFetch";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import styles from "./style/productList.style";
import { ProductCardView } from "./ProductCardView";

export const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <ProductCardView item={item} />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};
