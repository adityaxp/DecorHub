import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  searchImage: {
    resizeMode: "contain",
    width: SIZES.width - 80,
    height: SIZES.height - 300,
    opacity: 0.9,
  },
});

export default styles;
