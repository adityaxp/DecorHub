import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import styles from "../styles/home.styles";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Welcome } from "../components/Welcome";
import { Carousel } from "../../../components/Carousel";
import { Headings } from "../components/Headings";
import { ProductRow } from "../../Product/components/ProductRow";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState("0");

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);
      const getCartCount = await AsyncStorage.getItem("cartCount");

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLoggedIn(true);
        getCartCount !== null ? setCartCount(getCartCount) : setCartCount("0");
      } else {
        // navigation.navigate('Login')
      }
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>
            {userData ? userData.location : "Mumbai, India"}
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>{cartCount}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                userLoggedIn
                  ? console.log(userData.username)
                  : navigation.navigate("LoginScreen")
              }
            >
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
