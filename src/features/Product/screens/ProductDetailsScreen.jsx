import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles/productDetailsScreen.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../infrastructure/theme";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";

const ProductDetailsScreen = ({ navigation }) => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default ProductDetailsScreen;
