import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useState } from "react";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import styles from "./styles/cart.style";
import { BackButton } from "../../../components/BackButton";
import fetchCart from "../../../services/hooks/fetchCart";
import CartTile from "../components/CartTile";
import { Button } from "../../../components/Button";
const CartScreen = ({ navigation }) => {
  const { data, loading, error, refetch } = fetchCart();
  const [select, setSelect] = useState(false);
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <View style={styles.titleRow}>
          <Text style={styles.text}>Cart</Text>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            style={{ marginHorizontal: 20 }}
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <CartTile
                item={item}
                onPress={() => {
                  setSelect(!select);
                }}
                select={select}
              />
            )}
          />
          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
            <Button loader={false} title={"Checkout"} />
          </View>
        </View>
      )}
    </CustomSafeAreaView>
  );
};

export default CartScreen;
