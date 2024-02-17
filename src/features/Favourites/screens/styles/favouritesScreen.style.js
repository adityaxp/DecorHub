import { StyleSheet } from "react-native";
import { SIZES, SHADOWS, COLORS } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: SIZES.width - 50,
    marginBottom: 12,
  },

  text: {
    fontFamily: "bold",
    fontSize: SIZES.xLarge,
    marginLeft: SIZES.xxLarge,
    marginVertical: SIZES.xSmall - 2,
  },

  listContainer: {
    marginHorizontal: 20,
  },
  favContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: SIZES.xSmall,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.secondary,
  },
  imageContainer: {
    width: 70,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  fav: {
    fontFamily: "bold",
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
  supplier: {
    fontFamily: "regular",
    color: COLORS.gray,
    fontSize: 14,
  },
});

export default styles;
