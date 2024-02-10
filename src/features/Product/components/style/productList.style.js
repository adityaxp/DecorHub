import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  separator: {
    height: 20,
  },
  productCard: {
    width: "50%",
    paddingHorizontal: 5,
  },
});

export default styles;
