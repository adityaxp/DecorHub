import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";

import styles from "./styles/favouritesScreen.style";
import { BackButton } from "../../../components/BackButton";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../../infrastructure/theme";

export const FavouritesScreen = ({ navigation }) => {
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    checkIfFav();
  }, []);

  const checkIfFav = async () => {
    const id = await AsyncStorage.getItem("id");
    const favId = `favorites${JSON.parse(id)}`;
    try {
      const favObj = await AsyncStorage.getItem(favId);
      if (favObj !== null) {
        const favs = JSON.parse(favObj);
        const favList = Object.values(favs);
        setFavData(favList);
        console.log(favList.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavorites = async (pID) => {
    const id = await AsyncStorage.getItem("id");
    const favId = `favorites${JSON.parse(id)}`;
    let productId = pID;

    try {
      const existingItem = await AsyncStorage.getItem(favId);
      let favObj = existingItem ? JSON.parse(existingItem) : {};
      if (favObj[productId]) {
        delete favObj[productId];
        checkIfFav();
      }
      await AsyncStorage.setItem(favId, JSON.stringify(favObj));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <View style={styles.titleRow}>
          <Text style={styles.text}>Favourites</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={favData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.favContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.fav}>{item.title}</Text>
                <Text style={styles.supplier}>{item.supplier}</Text>
                <Text style={styles.supplier}>$ {item.price}</Text>
              </View>
              <SimpleLineIcons
                onPress={() => deleteFavorites(item.id)}
                name="trash"
                size={24}
                color={COLORS.red}
              />
            </View>
          )}
        />
      </View>
    </CustomSafeAreaView>
  );
};
