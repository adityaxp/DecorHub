import React, { useState } from "react";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import { CustomSearchBar } from "../../../components/CustomSearchBar";
import { useSearchProduct } from "../../../services/hooks/useSearchProduct";
import styles from "./styles/searchScreen.style";
import { View, FlatList, Image, Keyboard } from "react-native";
import { SearchTile } from "../components/SearchTile";
import { SIZES } from "../../../infrastructure/theme";
import styled from "styled-components/native";
import useKeyboardStatus from "../../../components/hooks/useKeyboardStatus";

const CustomView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${({ keyboardIsVisible }) => keyboardIsVisible && `margin-top: 150px`};
`;

const SearchScreen = () => {
  const [searchKey, setSearchKey] = useState("");
  const searchedResults = useSearchProduct({ searchKey });
  const keyboardIsVisible = useKeyboardStatus();

  const handleSearch = () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <CustomSafeAreaView>
      <CustomSearchBar
        freezeState={false}
        setSearchKey={setSearchKey}
        searchKey={searchKey}
        handleSearch={handleSearch}
      />
      {searchedResults.length === 0 ? (
        <CustomView keyboardIsVisible={keyboardIsVisible}>
          <Image
            source={require("../../../../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </CustomView>
      ) : (
        <FlatList
          data={searchedResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </CustomSafeAreaView>
  );
};

export default SearchScreen;
