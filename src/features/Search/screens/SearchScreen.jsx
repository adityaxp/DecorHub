import React, { useState } from "react";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import { CustomSearchBar } from "../../../components/CustomSearchBar";
import { useSearchProduct } from "../../../services/hooks/useSearchProduct";
import styles from "./styles/searchScreen.style";
import { View, FlatList, Image } from "react-native";

const SearchScreen = () => {
  const [searchKey, setSearchKey] = useState("");
  const searchedResults = useSearchProduct({ searchKey });

  const handleSearch = () => {
    try {
      console.log(searchedResults.length);
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
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../../../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList />
      )}
    </CustomSafeAreaView>
  );
};

export default SearchScreen;
