import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { ProductCardView } from "./ProductCardView";
import styles from "./style/productRow.style";
import { useFetch } from "../../../services/useFetch";

export const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
  return (
    <View style={{ marginTop: SIZES.medium, marginLeft: 12 }}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Error!</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};
