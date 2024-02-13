import { View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/search.style";
import { COLORS, SIZES } from "../infrastructure/theme";

export const CustomSearchBar = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Feather name="search" size={24} style={styles.searchIcon} />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        {props.freezeState ? (
          <TextInput
            style={styles.searchInput}
            onPressIn={() => navigation.navigate("SearchScreen")}
            placeholder="What are you looking for?"
          />
        ) : (
          <TextInput
            style={styles.searchInput}
            value={props.searchKey}
            onChangeText={props.setSearchKey}
            placeholder="What are you looking for?"
          />
        )}
      </View>
      <View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() =>
            props.freezeState
              ? navigation.navigate("SearchScreen")
              : props.handleSearch()
          }
        >
          <Feather
            name="arrow-right"
            size={SIZES.xLarge}
            color={COLORS.offwhite}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
