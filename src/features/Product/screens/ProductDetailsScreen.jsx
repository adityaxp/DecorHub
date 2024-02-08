import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles/productDetailsScreen.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS } from "../../../infrastructure/theme";

const ProductDetailsScreen = ({ navigation }) => {
  const [count, setCount] = useState(1);

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
            color={COLORS.secondary}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 100.89</Text>
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
          <Text style={styles.descText}>
            The Comby Sofa Couch seamlessly blends comfort and style, offering a
            perfect balance of form and function for any living space. With its
            contemporary design, plush cushions, and versatile configuration
            options, it invites you to relax in luxurious comfort while
            effortlessly complementing your home decor. Whether you're unwinding
            after a long day or entertaining guests, the Comby Sofa Couch is
            sure to be the centerpiece of your lounging experience.
          </Text>
        </View>
        <View style={styles.location}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="location-outline" size={20} />
            <Text> Mumbai, India</Text>
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

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
