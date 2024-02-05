import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 230,
    marginEnd: -10,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  productTitle: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  productSupplier: {
    fontFamily: "regular",
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
  productPrice: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
