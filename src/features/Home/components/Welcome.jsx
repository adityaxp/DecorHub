import { View, Text } from "react-native";
import React from "react";
import styles from "./styles/welcome.style";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { CustomSearchBar } from "../../../components/CustomSearchBar";

const Title = () => (
  <View style={styles.container}>
    <Text
      style={styles.welcomeText(COLORS.black, SIZES.xxLarge - 5, SIZES.xSmall)}
    >
      Find The Most
    </Text>
    <Text style={styles.welcomeText(COLORS.primary, SIZES.xLarge, -15)}>
      Luxurious Furniture
    </Text>
  </View>
);

export const Welcome = () => {
  return (
    <View>
      <Title />
      <CustomSearchBar freezeState={true} />
    </View>
  );
};
