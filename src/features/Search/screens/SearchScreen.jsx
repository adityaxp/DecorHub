import { StyleSheet, Text } from "react-native";
import React from "react";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import { CustomSearchBar } from "../../../components/CustomSearchBar";

const SearchScreen = () => {
  return (
    <CustomSafeAreaView>
      <CustomSearchBar freezeState={true} />
    </CustomSafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
