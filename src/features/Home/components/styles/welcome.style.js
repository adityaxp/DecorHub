import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: (color, textSize, topMargin) => ({
    fontFamily: "bold",
    fontSize: textSize,
    marginTop: topMargin,
    color: color,
    marginHorizontal: SIZES.small,
  }),
});

export default styles;
