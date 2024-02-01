import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import styles from "../styles/home.styles";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Welcome } from "../components/Welcome";
import { Carousel } from "../../../components/Carousel";
import { Headings } from "../components/Headings";
import { ProductRow } from "../../Product/components/ProductRow";

const HomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Mumbai, India</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>0</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
