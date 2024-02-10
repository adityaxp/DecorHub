import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./styles/newArrivals.style";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { ProductList } from "../components/ProductList";

export const NewArrivals = ({ navigation }) => {
  return (
    <CustomSafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}> Products</Text>
        </View>
        <ProductList />
      </View>
    </CustomSafeAreaView>
  );
};
