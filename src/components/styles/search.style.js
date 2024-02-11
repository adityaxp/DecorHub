import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../infrastructure/theme";

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.small,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    padding: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
});

export default styles;
