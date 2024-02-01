import { FlatList, View, Text } from "react-native";
import React from "react";
import { SIZES } from "../../../infrastructure/theme";
import { ProductCardView } from "./ProductCardView";
import styles from "./style/productRow.style";

export const ProductRow = () => {
  const products = [1, 2, 3, 4, 5];

  return (
    <View style={{ marginTop: SIZES.medium }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};
