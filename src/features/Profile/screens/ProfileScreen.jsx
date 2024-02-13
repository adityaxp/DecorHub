import { Image, View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles/profileScreen.style";
import { COLORS } from "../../../infrastructure/theme";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
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
            source={require("../../../../assets/images/empty-profile.png")}
            style={styles.profile}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {userLoggedIn ? (
              userData.name
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
        {userLoggedIn === true ? (
          <></>
        ) : (
          <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem(0.2)}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.name}>{"   "}Favourites</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;
