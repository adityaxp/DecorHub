import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles/productDetailsScreen.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS } from "../../../infrastructure/theme";
import { useRoute } from "@react-navigation/native";
import AddToCart from "../../../services/hooks/addToCart";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const [count, setCount] = useState(1);

  const [userData, setUserData] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    checkExistingUser();
    checkIfAlreadyFav();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLoggedIn(true);
      } else {
        // navigation.navigate('Login')
      }
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };

  const checkIfAlreadyFav = async () => {
    const id = await AsyncStorage.getItem("id");
    const favId = `favorites${JSON.parse(id)}`;
    try {
      const favObj = await AsyncStorage.getItem(favId);
      if (favObj !== null) {
        const favs = JSON.parse(favObj);
        if (favs[item._id]) {
          setFav(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorites = async () => {
    const id = await AsyncStorage.getItem("id");
    const favId = `favorites${JSON.parse(id)}`;
    let productId = item._id;
    let productObj = {
      title: item.title,
      id: item._id,
      supplier: item.supplier,
      price: item.price,
      imageUrl: item.imageUrl,
      product_location: item.product_location,
    };
    try {
      const existingItem = await AsyncStorage.getItem(favId);
      let favObj = existingItem ? JSON.parse(existingItem) : {};
      if (favObj[productId]) {
        delete favObj[productId];
        console.log("deleted");
        setFav(false);
      } else {
        favObj[productId] = productObj;
        console.log("Added to fav");
        setFav(true);
      }
      await AsyncStorage.setItem(favId, JSON.stringify(favObj));
    } catch (error) {
      console.log(error);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count === 1 ? setCount(1) : setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            userLoggedIn ? addToFavorites() : navigation.navigate("LoginScreen")
          }
        >
          <Ionicons
            name={fav ? "heart" : "heart-outline"}
            size={30}
            color={COLORS.red}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title} </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}> (5.0)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                increment();
              }}
            >
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                decrement();
              }}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>{item.description}</Text>
        </View>
        <View style={styles.location}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="location-outline" size={20} />
            <Text> {item.product_location}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
            <Text> Free Delivery </Text>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Buy Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              userLoggedIn
                ? AddToCart(item._id, count)
                : navigation.navigate("LoginScreen")
            }
            style={styles.addCart}
          >
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
