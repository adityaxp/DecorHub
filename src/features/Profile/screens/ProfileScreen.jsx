import { Image, View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles/profileScreen.style";
import { COLORS } from "../../../infrastructure/theme";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileMenu = ({ navigation }) => {
  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;
    try {
      await AsyncStorage.multiRemove([useId, "id"]);
      navigation.replace("BottomTabNavigation");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },

      {
        text: "Continue",
        onPress: () => userLogout(),
      },
    ]);
  };

  return (
    <View style={styles.menuWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate("FavouritesScreen")}>
        <View style={styles.menuItem(0.2)}>
          <MaterialCommunityIcons
            name="heart-outline"
            color={COLORS.primary}
            size={24}
          />
          <Text style={styles.name}>{"   "}Favourites</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
        <View style={styles.menuItem(0.2)}>
          <MaterialCommunityIcons
            name="truck-delivery-outline"
            color={COLORS.primary}
            size={24}
          />
          <Text style={styles.name}>{"   "}Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
        <View style={styles.menuItem(0.2)}>
          <SimpleLineIcons name="bag" color={COLORS.primary} size={24} />
          <Text style={styles.name}>{"   "}Cart</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => logout()}>
        <View style={styles.menuItem(0.2)}>
          <AntDesign name="logout" color={COLORS.primary} size={24} />
          <Text style={styles.name}>{"   "}Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    checkExistingUser();
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

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Image
          source={require("../../../../assets/images/abstract.jpg")}
          style={styles.cover}
        />
      </View>
      <View>
        <View style={styles.profileContainer}>
          <Image
            source={
              userLoggedIn
                ? require("../../../../assets/images/sunflower.jpg")
                : require("../../../../assets/images/empty-profile.png")
            }
            style={styles.profile}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {userLoggedIn ? (
              userData.username
            ) : (
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text style={styles.name}>New customer?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  <Text style={{ color: COLORS.link, marginLeft: 5 }}>
                    Start Here
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Text>
        </View>
        {userLoggedIn === false ? (
          <></>
        ) : (
          <ProfileMenu navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;
